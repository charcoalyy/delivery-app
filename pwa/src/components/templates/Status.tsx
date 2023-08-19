import { Flex } from '@mantine/core'
import Header from '@molecules/Header'

const Status = () => {
  return (
    <Flex
      direction="column"
      sx={{ width: '390px', height: '844px', border: '1px solid red' }}
    >
      <Header title="Delivery Status" subtitle={`Tracking ID: PLACEHOLDER`} />
    </Flex>
  )
}

export default Status
