import { test as base, expect } from '@playwright/test'
import { http } from 'msw'
import type { MockServiceWorker } from 'playwright-msw'
import { createWorkerFixture } from 'playwright-msw'

import { handlers } from '../src/mocks/handlers.js'

const test = base.extend<{
  worker: MockServiceWorker
  http: typeof http
}>({
  worker: createWorkerFixture(handlers),
  http
})

export { expect, test }
