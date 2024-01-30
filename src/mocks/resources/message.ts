import { HttpHandler, HttpResponse, http } from 'msw'

export default function getMessage(): HttpHandler {
  return http.get('/api/v1/message', () => {
    return HttpResponse.json({
      message: 'Hello World, from msw + Vue 3 Enterprise Boilerplate!'
    })
  })
}