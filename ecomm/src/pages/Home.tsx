import { Button, Flex, Title, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <Flex
      direction="column"
      sx={{ width: '100vw', height: '100vh' }}
      justify="center"
      align="center"
    >
      <Title order={1} color="violet">
        cart.it
      </Title>
      <Text mb="24px">Your favourite generic eCommerce platform.</Text>
      <Button color="violet" onClick={() => navigate('/order')}>
        Finish your order
      </Button>
    </Flex>
  )
}

export default Home
