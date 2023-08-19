import axios from 'axios'

interface GetProps {
  url: string
  params?: any
  token?: string
}

export const get = async ({ url, params }: GetProps) => {
  console.log(new URLSearchParams('id'))
  if (params) {
    url += '?' + new URLSearchParams(params).toString()
  }

  const response = await axios.get(url)

  const data = response.data

  if (response.status) {
    return data
  }
  throw data
}

interface PostProps {
  url: string
  body?: any
  token?: string
}

export const post = async ({ url, body }: PostProps) => {
  const response = await axios.post(url, body)

  const data = response.data

  if (response.status) {
    return data
  }
  throw data
}
