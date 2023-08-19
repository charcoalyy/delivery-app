import ActionButton from '@atoms/ActionButton'
import { Flex } from '@mantine/core'
import Header from '@molecules/Header'
import StatusTimeline from '@organisms/StatusTimeline'

const Status = ({ data, action }: { data: any; action: () => void }) => {
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
      <Header title="Delivery Status" subtitle={`Tracking ID: PLACEHOLDER`} />
      <img width="130px" height="130px" src="/images/car.png"></img>
      <StatusTimeline data={data} />
      <ActionButton text="Track my delivery" handleClick={action} />
    </Flex>
  )
}

export default Status
