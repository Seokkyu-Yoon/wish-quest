import express from 'express'
import createError from 'http-errors'

export function Router (controller) {
  const router = express.Router()
  return Object.freeze(router)
    .get('/', (req, res, next) => res.render('index', { title: 'Express' }))
    .use((req, res, next) => next(createError(404)))
    .use((err, req, res, next) => {
      // set locals, only providing error in development
      res.locals.message = err.message
      res.locals.error = req.app.get('env') === 'development' ? err : {}

      // render the error page
      res.status(err.status || 500)
      res.render('error')
    })
}
