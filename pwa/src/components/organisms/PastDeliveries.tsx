import { Flex, SegmentedControl, Title, Text } from '@mantine/core'

const PastDeliveries = () => {
  return (
    <Flex
      direction="column"
      justify="column"
      align="column"
      sx={{
        width: '390px',
        backgroundColor: '#FB7F0D',
        marginTop: '50px',
        height: '320px',
        padding: '20px',
        position: 'absolute',
        bottom: 0,
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
          padding: '16px',
        }}
      >
        <Title order={3}>iPad Pro 11in</Title>
        <Text fz="xs">Ordered 08/19/2023</Text>
      </div>
      <div
        style={{
          backgroundColor: 'white',
          marginTop: '12px',
          borderRadius: '5px',
          padding: '16px',
        }}
      >
        <Title order={3}>Laptop Cleaner</Title>
        <Text fz="xs">Ordered 08/19/2023</Text>
      </div>
    </Flex>
  )
}

export default PastDeliveries
