export function RouterUser (Router, controllerUser) {
  const routerUserById = Router()
    .get('/', controllerUser.get)
    .get('/connects/assigned', controllerUser.getAssignedConnects)
    .get('/connects/requested', controllerUser.getRequestedConnects)
    .get('/connects/responsed', controllerUser.getResponsedConnects)
  const routerUser = Router()
    .use('/:id', routerUserById)
    .get('/', controllerUser.list)
  return routerUser
}
