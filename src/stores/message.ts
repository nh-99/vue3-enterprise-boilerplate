import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Message } from '@/types/message'
import axios from 'axios'

export const useMessageStore = defineStore('message', () => {
  const messageData = ref()

  const fetchMessage = async () => {
    try {
      const response = await axios.get('/api/v1/message')
      messageData.value = response.data.message as Message
    } catch (error) {
      console.log('uh oh!')
      console.error(error)
    }
  }

  return { messageData, fetchMessage }
})
