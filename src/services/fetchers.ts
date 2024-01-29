import axios from 'axios'

export const fetchMessage = async function () {
  const response = await axios.get('/api/v1/message')
  return response.data.message
}
