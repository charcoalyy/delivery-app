import ActionButton from '@atoms/ActionButton'
import Header from '@molecules/Header'
import MapPopup from '@organisms/MapPopup'
import Wrapper from './Wrapper'
import MapNavPopup from '@organisms/MapNavPopup'
import { useMemo } from 'react'
import useUser from '@context/userContext'

const Map = ({ data, action }: { data?: any; action: () => void }) => {
  const { type, trackingId } = useUser()

  const userElements = useMemo(() => {
    switch (type) {
      case 'courier':
        return <MapNavPopup />
      case 'customer':
      default:
        return (
          <>
            <Header
              title="Track My Delivery"
              subtitle={`Tracking ID: ${trackingId}`}
            />
            <MapPopup data={data} />
            <ActionButton text="View Delivery Status" handleClick={action} />
          </>
        )
    }
  }, [type, data])

  return (
    <Wrapper header={type === 'courier' ? 'Map' : ''}>{userElements}</Wrapper>
  )
}

export default Map
