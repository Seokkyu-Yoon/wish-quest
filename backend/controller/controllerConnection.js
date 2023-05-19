export function ControllerConnection (serviceConnection) {
  const instance = Object.freeze({
    request (req, res, next) {
      const { userIdReq, userIdRes } = req.body || {}
      serviceConnection.request(userIdReq, userIdRes)
        .then(connection => res.send(connection))
        .catch(err => { throw err })
    },
    assign (req, res, next) {
      const { id } = req.params || {}
      serviceConnection.assign(id)
        .then(connection => res.send(connection))
        .catch(err => { throw err })
    },
    update (req, res, next) {
      const { id } = req.params || {}
      const { forWish } = req.body || {}
      serviceConnection.update(id, forWish)
        .then(connection => res.send(connection))
        .catch(err => { throw err })
    },
    remove (req, res, next) {
      const { id } = req.params || {}
      serviceConnection.remove(id)
        .then(removed => res.send(removed))
        .catch(err => { throw err })
    }
  })
  return instance
}
