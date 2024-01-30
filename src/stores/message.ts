import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchMessage } from '@/services/fetchers'

export const useMessageStore = defineStore('message', () => {
  const messageData = ref()

  const message = () => {
    return fetchMessage().then((msg) => {
      messageData.value = msg
    })
  }

  return { messageData, message }
})
