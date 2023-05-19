import { Router } from 'express'

import { RouterIndex } from './routerIndex.js'

export function Routes (controller) {
  return RouterIndex(Router, controller)
}
