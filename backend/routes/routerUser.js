export function RouterUser (Router, controllerUser) {
  const routerUser = Router()
    .get('/:id/connects/assigned', controllerUser.getAssignedConnects)
    .get('/:id/connects/requested', controllerUser.getRequestedConnects)
    .get('/:id/connects/responsed', controllerUser.getResponsedConnects)
    .get('/:id', controllerUser.get)
    .get('/', controllerUser.list)
  return routerUser
}
