interface GetProps {
  url: string
  params?: any
  token?: string
}

export const get = async ({ url, params }: GetProps) => {
  if (params) {
    url += '?' + new URLSearchParams(params).toString()
  }

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8080',
    },
    method: 'GET',
    mode: 'no-cors',
  })

  const data = await response.json()

  if (response.ok) {
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
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(body),
  })

  const data = await response.json()

  if (response.ok) {
    console.log('ok!')
    return data
  }
  throw data
}
