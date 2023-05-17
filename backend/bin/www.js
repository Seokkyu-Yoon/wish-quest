#!/usr/bin/env node

/**
 * Module dependencies.
 */
import http from 'http'

import { createApp } from '../app.js'
import { Debug } from '../debug/index.js'
const debug = Debug('www')

async function createServer () {
  const app = await createApp()

  /**
   * Get port from environment and store in Express.
   */
  const port = normalizePort(process.env.PORT || '3000')
  app.set('port', port)

  /**
   * Create HTTP server.
   */
  const server = http.createServer(app)
  return server
    .on('error', onError)
    .listen(port)
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort (val) {
  const port = parseInt(val, 10)
  if (isNaN(port)) {
    // named pipe
    return val
  }
  if (port >= 0) {
    // port number
    return port
  }
  return false
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError (error) {
  if (error.syscall !== 'listen') throw error

  // handle specific listen errors with friendly messages
  if (error.code === 'EACCES') {
    console.error('requires elevated privileges')
    process.exit(1)
  }
  if (error.code === 'EADDRINUSE') {
    console.error('already in use')
    process.exit(1)
  }
  throw error
}

/**
 * Listen on provided port, on all network interfaces.
 */
createServer().then(server => {
  debug(`Listening on http://localhost:${server.address().port}`)
}).catch(onError)
