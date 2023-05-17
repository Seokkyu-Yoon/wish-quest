import { mkdir } from 'node:fs'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

import { config } from './config.js'
import { User } from './user.js'

export async function LowDB () {
  await new Promise((resolve, reject) => mkdir(config.dirpath, { recursive: true }, err => err ? reject(err) : resolve()))
  const adapter = new JSONFile(config.filepath)
  const db = new Low(adapter, {})
  await db.read()
  db.data = db.data || {}
  return Object.freeze({
    user: User(db)
  })
}
