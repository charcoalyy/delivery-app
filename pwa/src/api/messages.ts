import { get, post } from './fetchRequests'

export const getMessages = async () => {
  const data = await get({
    url: 'https://jsonplaceholder.typicode.com/comments', // TODO: replace with our API
  })
  return data
}

export const sendMessage = async ({ params }: { params: string }) => {
  const data = await post({
    url: 'https://jsonplaceholder.typicode.com/posts', // TODO: replace with our API
    body: params,
  })

  return data
}
