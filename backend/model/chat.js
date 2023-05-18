export function Chat ({ cId, userId, writeAt = new Date(), content }) {
  return {
    cId,
    userId,
    writeAt,
    content
  }
}
