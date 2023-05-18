const TABLE_NAME = 'connect'
export function Connect (schema) {
  const data = schema.get(TABLE_NAME)
  function findIdxByIds (id) {
    return data.findIndex(savedConnect => savedConnect.id === id)
  }
  const instance = Object.freeze({
    async save (connect) {
      if (instance.findByIds(connect.id)) throw new Error(`이미 존재하는 ${TABLE_NAME} 입니다`)
      data.push(connect)
      await schema.save()
      return connect
    },
    async list () {
      return data
    },
    async listAssigned (userId) {
      return data.filter(connect => connect.assign && (connect.userIdReq === userId || connect.userIdRes === userId))
    },
    async listRequested (userId) {
      return data.filter(connect => !connect.assign && connect.userIdReq === userId)
    },
    async listResponsed (userId) {
      return data.filter(connect => !connect.assign && connect.userIdRes === userId)
    },
    async findIdxBy (connect) {
      return findIdxByIds(connect.id)
    },
    async findByIds (id) {
      const idx = findIdxByIds(id)
      if (idx < 0) return null
      return data[idx]
    },
    async update (connect) {
      const idx = instance.findIdxBy(connect)
      if (idx < 0) return null
      data.splice(idx, 1, connect)
      await schema.save()
      return connect
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
