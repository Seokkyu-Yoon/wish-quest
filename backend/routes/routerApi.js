import { RouterSign } from './routerSign.js'
import { RouterUser } from './routerUser.js'

export function RouterApi (Router, controller) {
  const routerApi = Router()
    .use('/sign', RouterSign(Router, controller.sign))
    .use('/user', RouterUser(Router, controller.user))
    .use(controller.error.notFound)
  return routerApi
}
