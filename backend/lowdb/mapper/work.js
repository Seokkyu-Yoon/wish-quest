const TABLE_NAME = 'work'
export function Work (schema) {
  const data = schema.get(TABLE_NAME)
  function findIdxByIds (id) {
    return data.findIndex(savedWork => savedWork.id === id)
  }
  const instance = Object.freeze({
    async save (work) {
      if (instance.findByIds(work.id)) throw new Error(`이미 존재하는 ${TABLE_NAME} 입니다`)
      data.push(work)
      await schema.save()
      return work
    },
    async list () {
      return data
    },
    async findIdxBy (work) {
      return findIdxByIds(work.id)
    },
    async findByIds (id) {
      const idx = findIdxByIds(id)
      if (idx < 0) return null
      return data[idx]
    },
    async update (work) {
      const idx = instance.findIdxBy(work)
      if (idx < 0) return null
      data.splice(idx, 1, work)
      await schema.save()
      return work
    },
    async deleteById (id) {
      const idx = findIdxByIds(id)
      if (idx < 0) return false
      data.splice(idx, 1)
      await schema.save()
      return true
    }
  })
  return instance
}
