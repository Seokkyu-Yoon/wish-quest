const TABLE_NAME = 'user'
export function MapperUser (schema) {
  const data = schema.get(TABLE_NAME)
  function findIdxByIds (id) {
    return data.findIndex(savedUser => savedUser.id === id)
  }
  const instance = Object.freeze({
    async save (user) {
      if (instance.findByIds(user.id)) throw new Error(`이미 존재하는 ${TABLE_NAME} 입니다`)
      data.push(user)
      await schema.save()
      return user
    },
    async list () {
      return data
    },
    async findIdxBy (user) {
      return findIdxByIds(user.id)
    },
    async findByIds (id) {
      const idx = findIdxByIds(id)
      if (idx < 0) return null
      return data[idx]
    },
    async update (user) {
      const idx = instance.findIdxBy(user)
      if (idx < 0) return null
      data.splice(idx, 1, user)
      await schema.save()
      return user
    },
    async deleteByIds (id) {
      const idx = findIdxByIds(id)
      if (idx < 0) return false
      data.splice(idx, 1)
      await schema.save()
      return true
    }
  })
  return instance
}
