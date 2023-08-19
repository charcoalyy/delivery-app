import Map from '@templates/Map.tsx'
import { useNavigate } from 'react-router-dom'

const DeliveryTrack = () => {
  const navigate = useNavigate()

  return <Map action={() => navigate('/status')}></Map>
}

export default DeliveryTrack
