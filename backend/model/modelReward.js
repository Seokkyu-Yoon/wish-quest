export function ModelReward ({ cId, userId, rewardAt = new Date(), reward, assign = false }) {
  return {
    cId,
    userId,
    rewardAt,
    reward,
    assign
  }
}
