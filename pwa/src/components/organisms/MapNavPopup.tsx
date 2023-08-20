import { Flex, Grid, Title, Text, Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

const MapNavPopup = () => {
  const navigate = useNavigate()

  return (
    <Flex
      direction="column"
      justify="flex-start"
      align="center"
      sx={{
        width: '390px',
        height: '200px',
        padding: '36px 24px',
        gap: '30px',
        backgroundColor: '#FB7B05',
        borderRadius: '20px',
        position: 'relative',
        bottom: '-350px',
        boxShadow: '0px -6px 14px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Grid sx={{ width: '100%' }}>
        <Grid.Col span={9}>
          <Title order={3} color="white">
            3 min
          </Title>
          <Text fz="sm" color="white">
            120m 12:45 PM
          </Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button color="indigo" radius="xl" onClick={() => navigate('/')}>
            Exit
          </Button>
        </Grid.Col>
      </Grid>
    </Flex>
  )
}

export default MapNavPopup
