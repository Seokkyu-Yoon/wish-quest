import { Chat } from './chat.js'
import { Connect } from './connect.js'
import { ConnectUser } from './connectUser.js'
import { Reward } from './reward.js'
import { User } from './user.js'
import { Wish } from './wish.js'
import { Work } from './work.js'

export function Mapper (schema) {
  return Object.freeze({
    chat: Chat(schema),
    connect: Connect(schema),
    ConnectUser: ConnectUser(schema),
    reward: Reward(schema),
    user: User(schema),
    wish: Wish(schema),
    work: Work(schema)
  })
}
