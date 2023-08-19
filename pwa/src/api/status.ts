import { get } from './fetchRequests'
const baseURL = import.meta.env.VITE_BASE_URL

interface getStatusProps {
  params: { trackingId?: string }
}

export const getStatus = async ({ params }: getStatusProps) => {
  const data = await get({
    url: `${baseURL}/delivery/${params.trackingId}`,
    // params: params,
  })
  return data
}
