export function Schema (db) {
  if (db === null) throw new Error('db is null')
  let schemaData = null

  const instance = Object.freeze({
    async save () {
      await db.write()
    },
    async load () {
      await db.read()
      db.data = db.data || {}
      schemaData = db.data
      return instance
    },
    get (tablename) {
      schemaData[tablename] = schemaData[tablename] || []
      const tableData = schemaData[tablename]
      return tableData
    }
  })
  return instance
}
