export function ModelWish ({ cId, userId, wishAt = new Date(), assign = false }) {
  return {
    cId,
    userId,
    wishAt,
    assign
  }
}
