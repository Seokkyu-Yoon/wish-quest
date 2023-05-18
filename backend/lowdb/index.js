import { mkdir } from 'node:fs'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

import { config } from './config.js'
import { Schema } from './schema.js'
import { Mapper } from './mapper/index.js'

export async function MapperLowDB () {
  await new Promise((resolve, reject) => mkdir(config.dirpath, { recursive: true }, err => err ? reject(err) : resolve()))
  const adapter = new JSONFile(config.filepath)
  const db = new Low(adapter, {})
  const schema = Schema(db)
  await schema.load()

  return Mapper(schema)
}
