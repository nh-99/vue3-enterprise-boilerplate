import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Message } from '@/types/message'
import axios from 'axios'

export const useMessageStore = defineStore('message', () => {
  const messageData = ref()

  const fetchMessage = () => {
    return axios
      .get('/api/v1/message')
      .then((response) => {
        messageData.value = response.data.message as Message
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return { messageData, fetchMessage }
})
