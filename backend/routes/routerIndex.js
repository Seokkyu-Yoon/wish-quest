import { RouterApi } from './routerApi.js'

export function RouterIndex (Router, controller) {
  const routerIndex = Router()
    .use('/api', RouterApi(Router, controller))
    .get('/', (req, res, next) => res.render('index'))
    .use(controller.error.notFound)
    .use(controller.error.send)
  return routerIndex
}
