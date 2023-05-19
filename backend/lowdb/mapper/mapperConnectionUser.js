const TABLE_NAME = 'connectionUser'
export function MapperConnectionUser (schema) {
  const data = schema.get(TABLE_NAME)
  function findIdxByIds (cId, userId) {
    return data.findIndex(savedConnectionUser => {
      if (savedConnectionUser.cId !== cId) return false
      return savedConnectionUser.userId === userId
    })
  }
  const instance = Object.freeze({
    async save (connectionUser) {
      if (instance.findByIds(connectionUser.cId, connectionUser.userId)) throw new Error(`이미 존재하는 ${TABLE_NAME} 입니다`)
      data.push(connectionUser)
      await schema.save()
      return connectionUser
    },
    async list () {
      return data
    },
    async findIdxBy (connectionUser) {
      return findIdxByIds(connectionUser.cId, connectionUser.userId)
    },
    async findByIds (cId, userId) {
      const idx = findIdxByIds(cId, userId)
      if (idx < 0) return null
      return data[idx]
    },
    async update (connectionUser) {
      const idx = instance.findIdxBy(connectionUser)
      if (idx < 0) return null
      data.splice(idx, 1, connectionUser)
      await schema.save()
      return connectionUser
    },
    async deleteById (cId, userId) {
      const idx = findIdxByIds(cId, userId)
      if (idx < 0) return false
      data.splice(idx, 1)
      await schema.save()
      return true
    },
    async listByUserId (userId) {
      return data.filter(connectionUser => connectionUser.userId === userId)
    }
  })
  return instance
}
