export function ControllerUser (serviceUser) {
  const instance = Object.freeze({
    list (req, res, next) {
      serviceUser.list()
        .then(users => res.send(users))
        .catch(err => next(err))
    },
    get (req, res, next) {
      const { id } = req.params
      serviceUser.findUser(id)
        .then(user => res.send(user))
        .catch(err => next(err))
    },
    getAssignedConnects (req, res, next) {
      const { id } = req.params
      serviceUser.getAssignedConnects(id)
        .then(assignedConnects => res.send(assignedConnects))
        .catch(err => next(err))
    },
    getRequestedConnects (req, res, next) {
      const { id } = req.params
      serviceUser.getRequestedConnects(id)
        .then(requestedConnects => res.send(requestedConnects))
        .catch(err => next(err))
    },
    getResponsedConnects (req, res, next) {
      const { id } = req.params
      serviceUser.getResponsedConnects(id)
        .then(responsedConnects => res.send(responsedConnects))
        .catch(err => next(err))
    }
  })
  return instance
}
