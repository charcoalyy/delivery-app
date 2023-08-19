import { Title, Text } from '@mantine/core'
import Wrapper from '@templates/Wrapper'

const NotFound = () => {
  return (
    <Wrapper>
      <Title order={1}>Not found</Title>
      <Text>That page doesn't exist.</Text>
    </Wrapper>
  )
}

export default NotFound
