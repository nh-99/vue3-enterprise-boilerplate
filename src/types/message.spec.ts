import { describe, expect, it } from 'vitest'
import { type Message } from './message'

describe('message', () => {
  it('should work', () => {
    const message: Message = {
      message: 'hello, world'
    }
    expect(message.message).toEqual('hello, world')
  })
})
