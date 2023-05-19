import { v4 as uuidv4 } from 'uuid'
export function ModelConnection ({ id = uuidv4(), userIdReq, userIdRes, forWish = 1, assign = false }) {
  return {
    id,
    userIdReq,
    userIdRes,
    forWish,
    assign
  }
}
