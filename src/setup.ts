import { afterAll, afterEach, beforeAll } from 'vitest'
import { server } from '../src/mocks/server'
import { config } from '@vue/test-utils'
import MainLayout from '@/router/layouts/MainLayout.vue'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// ===
// Mock window properties not handled by jsdom
// ===
// Object.defineProperty(window, 'localStorage', {
//   value: () => {
//     let store = {} as Record<string, string>
//     return {
//       getItem: function (key: string) {
//         return store[key] || null
//       },
//       setItem: function (key: string, value: string) {
//         store[key] = value.toString()
//       },
//       clear: function () {
//         store = {}
//       }
//     }
//   }
// })

// ===
// Console handlers
// ===

// Make console.error throw, so that Vitest fails
const error = console.error
console.error = function (message) {
  error.apply(console)
  // NOTE: You can whitelist some `console.error` messages here
  //       by returning if the `message` value is acceptable.
  throw message instanceof Error ? message : new Error(message)
}

// Make console.warn throw, so that Vitest fails
const warn = console.warn
console.warn = function (message) {
  warn.apply(console)
  // NOTE: You can whitelist some `console.warn` messages here
  //       by returning if the `message` value is acceptable.
  throw message instanceof Error ? message : new Error(message)
}

// ===
// Global config
// ===

// Add the `Layout` component as a global stub for view tests
config.global.stubs = {
  MainLayout
}
