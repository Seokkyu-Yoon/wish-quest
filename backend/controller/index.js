import { ControllerError } from './controllerError.js'
import { ControllerSign } from './controllerSign.js'
import { ControllerUser } from './controllerUser.js'
import { ControllerConnection } from './controllerConnection.js'

export function Controller (service) {
  return Object.freeze({
    error: ControllerError(),
    sign: ControllerSign(service.sign),
    user: ControllerUser(service.user),
    connection: ControllerConnection(service.connection)
  })
}
