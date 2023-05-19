export function RouterConnection (Router, controllerConnection) {
  const routerConnection = Router()
    .post('/', controllerConnection.request)
    .patch('/:id', controllerConnection.assign)
    .put('/:id', controllerConnection.update)
    .delete('/:id', controllerConnection.remove)
  return routerConnection
}
