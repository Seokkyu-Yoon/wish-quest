export function Reward ({ cId, userId, rewardAt = new Date(), reward, assign = false }) {
  return {
    cId,
    userId,
    rewardAt,
    reward,
    assign
  }
}
