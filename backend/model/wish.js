export function Wish ({ cId, userId, wishAt = new Date(), assign = false }) {
  return {
    cId,
    userId,
    wishAt,
    assign
  }
}
