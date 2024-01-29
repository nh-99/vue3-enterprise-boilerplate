import { RequestHandler } from 'msw'
import getUsers from './resources/users'
import getMessage from './resources/message'

export const handlers: RequestHandler[] = [getUsers(), getMessage()]
