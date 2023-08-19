import { getStatus } from '@api/status'
import useUser from '@context/userContext'
import useRequest from '@hooks/useRequest'
import Status from '@templates/Status'
import { useEffect, useMemo } from 'react'
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

  const progress = useMemo(() => {
    if (data) {
      switch (data.status) {
        case 'delivered':
          return 2
        case 'on the way':
          return 1
        case 'order received':
        default:
          return 0
      }
    }
  }, [data])

  return (
    <>
      {data && (
        <Status
          data={{
            ...data,
            progress: progress,
          }}
          action={() => navigate('/track')}
        />
      )}
    </>
  )
}

export default DeliveryStatus
