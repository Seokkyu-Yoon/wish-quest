import createError from 'http-errors'

export function ControllerError () {
  function send (err, req, res, next) {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    res.status(err.status || 500)
    res.send(err)
  }
  function unAutorized (req, res, next) {
    next(createError(401))
  }
  function notFound (req, res, next) {
    next(createError(404))
  }

  return Object.freeze({
    send,
    unAutorized,
    notFound
  })
}
