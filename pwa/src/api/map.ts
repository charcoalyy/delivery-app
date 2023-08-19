import { get } from './fetchRequests'

export const getLocations = async () => {
  const data = await get({
    url: 'https://jsonplaceholder.typicode.com/comments', // TODO: replace with our API
  })
  return data
}
