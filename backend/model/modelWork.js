import { v4 as uuidv4 } from 'uuid'
export function ModelWork ({ id = uuidv4(), cId, userId, content, reward = 1, assign = false, repeat = null }) {
  return {
    id,
    cId,
    userId,
    content,
    reward,
    assign,
    repeat
  }
}
