export function User (db = null) {
  if (db === null) throw new Error('db is null')
  db.data.users = db.data.users || {}

  const instance = Object.freeze({
    async signup ({ id, password, name }) {
      if (id in db.data.users) throw new Error('이미 존재하는 아이디입니다')
      const user = { password, name }
      db.data.users[id] = user
      await db.write()
      return user
    }
  })
  return instance
}
