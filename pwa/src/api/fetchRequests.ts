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

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'no-cors',
    method: 'GET',
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
    return data
  }
  throw data
}
