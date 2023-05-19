import { ModelConnection } from '../model/modelConnection.js'
import { ModelConnectionUser } from '../model/modelConnectionUser.js'

export function ServiceConnection (mapperConnection, mapperConnectionUser) {
  const instance = Object.freeze({
    async request (userIdReq, userIdRes) {
      const connectionUsers = await mapperConnectionUser.listByUserId(userIdReq)
      for (const connectionUser of connectionUsers) {
        const connection = await mapperConnection.findByIds(connectionUser.cId)
        const exists = await mapperConnectionUser.findByIds(connection.id, userIdRes)
        if (exists) throw new Error('already has connection')
      }
      const connection = ModelConnection({ userIdReq, userIdRes })
      await mapperConnection.save(connection)
      return connection
    },
    async assign (id) {
      const connection = await mapperConnection.findByIds(id)
      if (connection === null) throw new Error('connect is not exists')
      if (connection.assign) throw new Error('connect already assigned')
      connection.assign = true

      const connectionUserReq = ModelConnectionUser({ cId: id, userId: connection.userIdReq })
      await mapperConnectionUser.save(connectionUserReq)
      const connectionUserRes = ModelConnectionUser({ cId: id, userId: connection.userIdRes })
      await mapperConnectionUser.save(connectionUserRes)
      return await mapperConnection.update(connection)
    },
    async update (id, forWish) {
      const connect = await mapperConnection.findByIds(id)
      if (connect === null) throw new Error('connect is not exists')
      if (!connect.assign) throw new Error('connect not assigned yet')
      connect.forWish = forWish
      return await mapperConnection.update(connect)
    },
    async remove (id) {
      const connect = await mapperConnection.findByIds(id)
      if (connect === null) throw new Error('connect is not exists')
      return await mapperConnection.deleteByIds(id)
    }
  })
  return instance
}
