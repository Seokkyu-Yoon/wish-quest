const TABLE_NAME = 'connection'
export function MapperConnection (schema) {
  const data = schema.get(TABLE_NAME)
  function findIdxByIds (id) {
    return data.findIndex(savedConnection => savedConnection.id === id)
  }
  const instance = Object.freeze({
    async save (connection) {
      if (instance.findByIds(connection.id)) throw new Error(`이미 존재하는 ${TABLE_NAME} 입니다`)
      data.push(connection)
      await schema.save()
      return connection
    },
    async list () {
      return data
    },
    async findIdxBy (connection) {
      return findIdxByIds(connection.id)
    },
    async findByIds (id) {
      const idx = findIdxByIds(id)
      if (idx < 0) return null
      return data[idx]
    },
    async update (connection) {
      const idx = instance.findIdxBy(connection)
      if (idx < 0) return null
      data.splice(idx, 1, connection)
      await schema.save()
      return connection
    },
    async deleteById (id) {
      const idx = findIdxByIds(id)
      if (idx < 0) return false
      data.splice(idx, 1)
      await schema.save()
      return true
    },
    async listAssignedByUserId (userId) {
      return data.filter(connection => {
        if (!connection.assign) return false
        return connection.userIdReq !== userId && connection.userIdRes !== userId
      })
    },
    async listRequestedByUserId (userId) {
      return data.filter(connection => {
        if (connection.assign) return false
        return connection.userIdReq === userId
      })
    },
    async listResponsedByUserId (userId) {
      return data.filter(connection => {
        if (connection.assign) return false
        return connection.userIdRes === userId
      })
    }
  })
  return instance
}
