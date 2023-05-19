import { ServiceSign } from './serviceSign.js'
import { ServiceUser } from './serviceUser.js'
import { ServiceConnection } from './serviceConnection.js'

export function Service (mapper) {
  return Object.freeze({
    sign: ServiceSign(mapper.user),
    connection: ServiceConnection(mapper.connection, mapper.connectionUser),
    user: ServiceUser(mapper.user, mapper.connection)
  })
}
