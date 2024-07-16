// stores/message.spec.ts
import { beforeEach, describe, expect, it } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useMessageStore } from './message'

describe('Message Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('sets from api', () => {
    const messageStore = useMessageStore()
    expect(messageStore.messageData).toBeUndefined()
    messageStore.fetchMessage().then(() => {
      expect(messageStore.messageData).toBe(
        'Hello World, from our mock API (msw) + Vue 3 Enterprise Boilerplate!'
      )
    })
  })
})
