import { ModelUser } from '../model/modelUser.js'

export function ServiceSign (mapperUser) {
  const instance = Object.freeze({
    async signup (id, password, name) {
      const user = ModelUser({ id, password, name })
      return await mapperUser.save(user)
    },
    async signin (id, password) {
      const user = await mapperUser.findByIds(id)
      if (user === null) throw new Error('Id is not found')
      if (user.password !== password) throw new Error('Password is invalid')
      return user
    }
  })
  return instance
}
