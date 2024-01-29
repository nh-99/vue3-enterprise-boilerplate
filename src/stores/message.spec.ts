// stores/counter.spec.ts
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useMessageStore } from './message'

describe('Counter Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('sets from api', () => {
    const messageStore = useMessageStore()
    expect(messageStore.messageData).toBeUndefined()
    messageStore.message
    expect(messageStore.messageData).toBe('Hello, World from msw!')
  })
})
