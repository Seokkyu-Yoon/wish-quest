import path from 'node:path'

const pathStorage = path.resolve(process.env.STORAGE)
if (!pathStorage) throw new Error('pathStorage is not defined')

export const config = {
  dirpath: pathStorage,
  filepath: path.resolve(pathStorage, process.env.IS_DEV ? 'wishquest.dev.db.json' : 'wishquest.db.json')
}
