import useRequest from '@hooks/useRequest'
import Map from '@templates/Map.tsx'
import { useNavigate } from 'react-router-dom'
import { getStatus } from '@api/status'
import useUser from '@context/userContext'
import { useEffect } from 'react'

const DeliveryTrack = () => {
  const { trackingId } = useUser()
  const { data, makeRequest } = useRequest({
    request: getStatus,
    params: { trackingId: trackingId },
    requestByDefault: true,
  })

  useEffect(() => {
    if (!data) {
      makeRequest()
    }
  }, [data])

  const navigate = useNavigate()

  return <Map data={data} action={() => navigate('/status')}></Map>
}

export default DeliveryTrack
