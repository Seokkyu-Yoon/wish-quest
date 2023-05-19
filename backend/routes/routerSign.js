export function RouterSign (Router, controllerSign) {
  const routerSign = Router()
    .get('/', controllerSign.signin)
    .post('/', controllerSign.signup)
  return routerSign
}
