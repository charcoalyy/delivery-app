import { getStatus } from '@api/status'
import useRequest from '@hooks/useRequest'
import Status from '@templates/Status'
import { useNavigate } from 'react-router-dom'

const DeliveryStatus = () => {
  const data = useRequest({
    request: getStatus,
    params: { trackingId: '-NcEYhC5Lo6iHiolN44W' },
    requestByDefault: true,
  })

  const navigate = useNavigate()

  return (
    <Status
      data={{
        ...data,
        progress: 2,
      }}
      action={() => navigate('/track')}
    />
  )
}

export default DeliveryStatus
