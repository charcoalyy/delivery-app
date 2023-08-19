import ActionButton from '@atoms/ActionButton'
import Header from '@molecules/Header'
import MapPopup from '@organisms/MapPopup'
import Wrapper from './Wrapper'

const Map = ({ data, action }: { data?: any; action: () => void }) => {
  return (
    <Wrapper>
      <Header title="Track My Delivery" subtitle={`Tracking ID: PLACEHOLDER`} />
      <MapPopup data={data} />
      <ActionButton text="View Delivery Status" handleClick={action} />
    </Wrapper>
  )
}

export default Map
