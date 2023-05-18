const TABLE_NAME = 'reward'
export function Reward (schema) {
  const data = schema.get(TABLE_NAME)
  function findIdxByIds (cId, userId, rewardAt) {
    return data.findIndex(savedReward => {
      if (savedReward.cId !== cId) return false
      if (savedReward.userId !== userId) return false
      return savedReward.rewardAt === rewardAt
    })
  }
  const instance = Object.freeze({
    async save (reward) {
      if (instance.findByIds(reward.cId, reward.userId, reward.rewardAt)) throw new Error(`이미 존재하는 ${TABLE_NAME} 입니다`)
      data.push(reward)
      await schema.save()
      return reward
    },
    async list () {
      return data
    },
    async findIdxBy (reward) {
      return findIdxByIds(reward.cId, reward.userId, reward.rewardAt)
    },
    async findByIds (cId, userId, rewardAt) {
      const idx = findIdxByIds(cId, userId, rewardAt)
      if (idx < 0) return null
      return data[idx]
    },
    async update (reward) {
      const idx = instance.findIdxBy(reward)
      if (idx < 0) return null
      data.splice(idx, 1, reward)
      await schema.save()
      return reward
    },
    async deleteById (cId, userId, rewardAt) {
      const idx = findIdxByIds(cId, userId, rewardAt)
      if (idx < 0) return false
      data.splice(idx, 1)
      await schema.save()
      return true
    }
  })
  return instance
}
