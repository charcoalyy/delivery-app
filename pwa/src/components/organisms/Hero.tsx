import { Flex, Text, Title } from '@mantine/core'
import { IconClockHeart, IconUsersGroup } from '@tabler/icons-react'

const Hero = () => {
  return (
    <Flex
      direction="column"
      sx={{
        width: '100%',
        backgroundColor: 'blue',
        height: '360px',
        borderRadius: '0 0 50px 50px',
        padding: '120px 30px',
      }}
    >
      <div style={{ width: '60%', marginBottom: '20px' }}>
        <Title order={1} color="white">
          Product Name
        </Title>
        <Text color="white" fz="sm">
          Fast, easy package delivery while empowering local couriers.
        </Text>
      </div>
      <Flex mb="8px">
        <IconClockHeart color="white" style={{ marginRight: '12px' }} />
        <Text fz="xs" color="white">
          Increased same-day delivery
        </Text>
      </Flex>
      <Flex>
        <IconUsersGroup color="white" style={{ marginRight: '12px' }} />
        <Text fz="xs" color="white">
          Transparent delivery communication
        </Text>
      </Flex>
      <img
        src="images/white_car.png"
        style={{ position: 'relative', left: 200, top: -300 }}
        width="250px"
        height="250px"
      ></img>
    </Flex>
  )
}

export default Hero
