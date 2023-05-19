import { MapperChat } from './mapperChat.js'
import { MapperConnection } from './mapperConnection.js'
import { MapperConnectionUser } from './mapperConnectionUser.js'
import { MapperReward } from './mapperReward.js'
import { MapperUser } from './mapperUser.js'
import { MapperWish } from './mapperWish.js'
import { MapperWork } from './mapperWork.js'

export function Mapper (schema) {
  return Object.freeze({
    chat: MapperChat(schema),
    connection: MapperConnection(schema),
    ConnectionUser: MapperConnectionUser(schema),
    reward: MapperReward(schema),
    user: MapperUser(schema),
    wish: MapperWish(schema),
    work: MapperWork(schema)
  })
}
