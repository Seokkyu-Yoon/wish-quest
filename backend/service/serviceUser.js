export function ServiceUser (mapperUser, mapperConnection) {
  const instance = Object.freeze({
    async list () {
      const users = await mapperUser.list()
      return users.map(user => ({ id: user.id, name: user.name }))
    },
    async findUser (id) {
      const user = mapperUser.findByIds(id)
      if (user === null) throw new Error('can\'t find user')
      return { id: user.id, name: user.name }
    },
    async getAssignedConnects (id) {
      return await mapperConnection.listAssignedByUserId(id)
    },
    async getRequestedConnects (id) {
      return await mapperConnection.listRequestedByUserId(id)
    },
    async getResponsedConnects (id) {
      return await mapperConnection.listResponsedByUserId(id)
    }
  })
  return instance
}
