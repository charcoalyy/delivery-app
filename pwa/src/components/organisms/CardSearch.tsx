import { Flex, Title } from '@mantine/core'
import SendID from '@molecules/SendID'

const CardSearch = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="flex-start"
      sx={{
        width: '90%',
        padding: '30px',
        borderRadius: '20px',
        boxShadow: '0px 1px 16px 4px rgba(169, 169, 169, 0.25)',
        marginTop: '-50px',
        backgroundColor: 'white',
        position: 'relative',
        zIndex: 3,
      }}
    >
      <Title order={3} mb="8px">
        Witness your package's journey
      </Title>
      <SendID />
    </Flex>
  )
}

export default CardSearch
