import { useNavigate } from 'react-router-dom'
import { Title, Text, Flex, Button } from '@mantine/core'

const ErrorNotice = () => {
  const navigate = useNavigate()
  return (
    <Flex
      direction="column"
      sx={{ maxWidth: '80%', margin: '20px', gap: '10px' }}
    >
      <Flex sx={{ gap: '10px' }}>
        <img src="images/error.png" height="50px"></img>
        <div>
          <Title order={3}>We couldn't find any data.</Title>
          <Text fz="xs">Double check your tracking ID.</Text>
        </div>
      </Flex>
      <Button radius="xl" color="indigo" onClick={() => navigate('/home')}>
        Back to home
      </Button>
    </Flex>
  )
}

export default ErrorNotice
