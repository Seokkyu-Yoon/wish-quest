import path from 'path'
import { fileURLToPath } from 'node:url'

import express from 'express'
import cors from 'cors'
import ejs from 'ejs'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import { router } from './routes/index.js'
import { LowDB } from './lowdb/index.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export async function createApp () {
  const db = await LowDB()
  const app = express()

  // view engine setup
  app.set('views', path.join(__dirname, 'public'))
  app.set('view engine', 'ejs')
  app.engine('html', ejs.renderFile)

  app.use(logger('dev'))
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(express.static(path.join(__dirname, 'public')))

  app.use('/', router)
  return app
}
