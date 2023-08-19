import { post } from './fetchRequests'
const baseURL = import.meta.env.VITE_BASE_URL

interface ShippingPostProps {
  params: {
    origin: string
    destination: string
  }
}

// retrieves shipping route information and fee
export const shippingInquiry = async ({ params }: ShippingPostProps) => {
  const data = await post({
    url: `${baseURL}/inquiry`,
    body: params,
  })
  return data
}

// creates shipping request
export const postShipping = async ({ params }: ShippingPostProps) => {
  const data = await post({
    url: `${baseURL}/delivery`,
    body: params,
  })

  return data
}
