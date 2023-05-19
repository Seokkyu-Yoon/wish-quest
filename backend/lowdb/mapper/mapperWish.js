const TABLE_NAME = 'wish'
export function MapperWish (schema) {
  const data = schema.get(TABLE_NAME)
  function findIdxByIds (cId, userId, wishAt) {
    return data.findIndex(savedWish => {
      if (savedWish.cId !== cId) return false
      if (savedWish.userId !== userId) return false
      return savedWish.wishAt === wishAt
    })
  }
  const instance = Object.freeze({
    async save (wish) {
      if (instance.findByIds(wish.cId, wish.userId, wish.wishAt)) throw new Error(`이미 존재하는 ${TABLE_NAME} 입니다`)
      data.push(wish)
      await schema.save()
      return wish
    },
    async list () {
      return data
    },
    async findIdxBy (wish) {
      return findIdxByIds(wish.cId, wish.userId, wish.wishAt)
    },
    async findByIds (cId, userId, wishAt) {
      const idx = findIdxByIds(cId, userId, wishAt)
      if (idx < 0) return null
      return data[idx]
    },
    async update (wish) {
      const idx = instance.findIdxBy(wish)
      if (idx < 0) return null
      data.splice(idx, 1, wish)
      await schema.save()
      return wish
    },
    async deleteById (cId, userId, wishAt) {
      const idx = findIdxByIds(cId, userId, wishAt)
      if (idx < 0) return false
      data.splice(idx, 1)
      await schema.save()
      return true
    }
  })
  return instance
}
