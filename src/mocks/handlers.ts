import { RequestHandler } from 'msw'
import getUsers from './resources/users'
import getMessage from './resources/message'
// pinia-mock-import - DO NOT REMOVE

export const handlers: RequestHandler[] = [
  getUsers(),
  getMessage()
  // pinia-mock-handler - DO NOT REMOVE
]
