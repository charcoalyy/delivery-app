import useRequest from '@hooks/useRequest'
import Map from '@templates/Map.tsx'
import { useNavigate } from 'react-router-dom'
import { getLocations } from '@api/map'

const DeliveryTrack = () => {
  const data = useRequest({
    request: getLocations,
    requestByDefault: true,
  })

  const navigate = useNavigate()

  return <Map data={data} action={() => navigate('/status')}></Map>
}

export default DeliveryTrack
