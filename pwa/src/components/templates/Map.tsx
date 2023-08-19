import ActionButton from '@atoms/ActionButton'
import { Flex } from '@mantine/core'
import Header from '@molecules/Header'
import MapPopup from '@organisms/MapPopup'

const Map = ({ data, action }: { data?: any; action: () => void }) => {
  return (
    <Flex
      direction="column"
      align="center"
      sx={{
        width: '390px',
        height: '844px',
        maxHeight: '844px',
        border: '1px solid green',
      }}
    >
      <Header title="Track My Delivery" subtitle={`Tracking ID: PLACEHOLDER`} />
      <MapPopup data={data} />
      <ActionButton text="View Delivery Status" handleClick={action} />
    </Flex>
  )
}

export default Map
