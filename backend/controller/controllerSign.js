export function ControllerSign (serviceSign) {
  const instance = Object.freeze({
    signup (req, res, next) {
      const { id, password, name } = req.body || {}
      serviceSign.signup(id, password, name)
        .then(user => res.send(user))
        .catch(err => { throw err })
    },
    signin (req, res, next) {
      const { id, password } = req.param || {}
      serviceSign.signin(id, password)
        .then(user => res.send(user))
        .catch(() => {
          res.status(401).send({ message: '아이디와 비밀번호를 확인해주세요' })
        })
    }
  })
  return instance
}
