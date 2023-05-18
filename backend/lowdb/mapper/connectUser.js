const TABLE_NAME = 'connectUser'
export function ConnectUser (schema) {
  const data = schema.get(TABLE_NAME)
  function findIdxByIds (cId, userId) {
    return data.findIndex(savedConnectUser => {
      if (savedConnectUser.cId !== cId) return false
      return savedConnectUser.userId === userId
    })
  }
  const instance = Object.freeze({
    async save (connectUser) {
      if (instance.findByIds(connectUser.cId, connectUser.userId)) throw new Error(`이미 존재하는 ${TABLE_NAME} 입니다`)
      data.push(connectUser)
      await schema.save()
      return connectUser
    },
    async list () {
      return data
    },
    async findIdxBy (connectUser) {
      return findIdxByIds(connectUser.cId, connectUser.userId)
    },
    async findByIds (cId, userId) {
      const idx = findIdxByIds(cId, userId)
      if (idx < 0) return null
      return data[idx]
    },
    async update (connectUser) {
      const idx = instance.findIdxBy(connectUser)
      if (idx < 0) return null
      data.splice(idx, 1, connectUser)
      await schema.save()
      return connectUser
    },
    async deleteById (cId, userId) {
      const idx = findIdxByIds(cId, userId)
      if (idx < 0) return false
      data.splice(idx, 1)
      await schema.save()
      return true
    }
  })
  return instance
}
