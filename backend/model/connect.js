import { v4 as uuidv4 } from 'uuid'
export function Connect ({ id = uuidv4(), userIdReq, userIdRes, forWish = 1, assign = false }) {
  return {
    id,
    userIdReq,
    userIdRes,
    forWish,
    assign
  }
}
