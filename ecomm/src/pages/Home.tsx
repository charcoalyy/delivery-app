import { Button, Flex, Title, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  const request = async () => {
    await fetch('http://localhost:8080/delivery', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        origin: '65 Dundas St W, Toronto, ON M5G 2C3',
        destination: '245 Church St, Toronto, ON M5B 1Z4',
      }),
    })
  }

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
      <Button color="violet" onClick={() => request()}>
        FUck me what is this
      </Button>
    </Flex>
  )
}

export default Home
