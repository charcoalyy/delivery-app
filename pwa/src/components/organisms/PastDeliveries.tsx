import { Flex, SegmentedControl, Title } from '@mantine/core'

const PastDeliveries = () => {
  return (
    <Flex
      direction="column"
      justify="column"
      align="column"
      sx={{
        width: '100%',
        backgroundColor: 'orange',
        marginTop: '16px',
        height: '100%',
        padding: '12px 20px',
      }}
    >
      <SegmentedControl
        data={[
          { label: 'Incoming', value: 'incoming' },
          { label: 'Received', value: 'received' },
        ]}
      />
      <div
        style={{
          backgroundColor: 'white',
          marginTop: '12px',
          borderRadius: '5px',
          padding: '10px',
        }}
      >
        <Title order={3}>iPad Pro 11in</Title>
      </div>
    </Flex>
  )
}

export default PastDeliveries
