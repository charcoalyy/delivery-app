import LabelledIcon from '@atoms/LabelledIcon'
import { Card, Grid, Text, Title } from '@mantine/core'
import { IconCar, IconPackage } from '@tabler/icons-react'

const Job = () => {
  return (
    <Card
      p="xl"
      sx={{
        width: '100%',
        minHeight: '200px',
        height: '200px',
        boxShadow: '0px 4px 8px 0px rgba(169, 169, 169, 0.35)',
        borderRadius: '10px',
        marginBottom: '8px',
      }}
    >
      <Card.Section
        sx={{ paddingBottom: '20px', borderBottom: '1px solid grey' }}
      >
        <Grid>
          <Grid.Col
            span={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Text fz="sm" weight={700} sx={{ opacity: 0.5 }} mb="20px">
              Pickup
            </Text>
            <Text fz="sm" weight={700}>
              65 Dundas St W, Toronto, ON
            </Text>
            <Text fz="sm">09:40 AM</Text>
          </Grid.Col>
          <Grid.Col
            span={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Text fz="sm" weight={700} sx={{ opacity: 0.5 }} mb="20px">
              Dropoff
            </Text>
            <Text fz="sm" weight={700}>
              245 Church St W, Toronto, ON
            </Text>
            <Text fz="sm">11:56 PM</Text>
          </Grid.Col>
        </Grid>
      </Card.Section>

      <Card.Section
        sx={{
          margin: '15px 8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <LabelledIcon text="50×30×20in" icon={IconPackage} />
        <LabelledIcon text="8km" icon={IconCar} />
        <Title order={3}>$17.32</Title>
      </Card.Section>
    </Card>
  )
}

export default Job
