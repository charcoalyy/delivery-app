import axios from 'axios'

interface GetProps {
  url: string
  params?: any
  token?: string
}

export const get = async ({ url, params }: GetProps) => {
  if (params) {
    url += '?' + new URLSearchParams(params).toString()
  }

  const response = await axios.get(url)

  if (response.status === 200) {
    return response.data
  }
  throw response.data
}

interface PostProps {
  url: string
  body?: any
  token?: string
}

export const post = async ({ url, body }: PostProps) => {
  const data = await axios.post(url, body)

  if (data.status === 200) {
    return data.data
  }
  throw data
}
