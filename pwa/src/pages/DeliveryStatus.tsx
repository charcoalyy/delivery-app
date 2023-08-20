import { getStatus } from '@api/status'
import useUser from '@context/userContext'
import useRequest from '@hooks/useRequest'
import Status from '@templates/Status'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const DeliveryStatus = () => {
  const { trackingId } = useUser()
  const { data, makeRequest } = useRequest({
    request: getStatus,
    params: { trackingId: trackingId },
    requestByDefault: true,
  })

  const navigate = useNavigate()

  useEffect(() => {
    if (!data) {
      makeRequest()
    }
  }, [data])

  return <Status data={data} action={() => navigate('/track')} />
}

export default DeliveryStatus
