const TABLE_NAME = 'chat'
export function MapperChat (schema) {
  const data = schema.get(TABLE_NAME)
  function findIdxByIds (cId, userId, writeAt) {
    return data.findIndex(chat => {
      if (chat.cId !== cId) return false
      if (chat.userId !== userId) return false
      return chat.writeAt === writeAt
    })
  }
  const instance = Object.freeze({
    async save (chat) {
      if (instance.findByIds(chat.cId, chat.userId, chat.writeAt)) throw new Error(`이미 존재하는 ${TABLE_NAME} 입니다`)
      data.push(chat)
      await schema.save()
      return chat
    },
    async list () {
      return data
    },
    async listInConnect (cId) {
      return data.filter(chat => chat.cId === cId)
    },
    async findIdxBy (chat) {
      return findIdxByIds(chat.cId, chat.userId, chat.writeAt)
    },
    async findByIds (cId, userId, writeAt) {
      const idx = findIdxByIds(cId, userId, writeAt)
      if (idx < 0) return null
      return data[idx]
    },
    async deleteByIds (cId, userId, writeAt) {
      const idx = findIdxByIds(cId, userId, writeAt)
      if (idx < 0) return false
      data.splice(idx, 1)
      await schema.save()
      return true
    }
  })
  return instance
}
