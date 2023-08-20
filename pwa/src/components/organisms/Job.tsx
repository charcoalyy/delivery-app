import LabelledIcon from '@atoms/LabelledIcon'
import { Button, Card, Grid, Text, Title } from '@mantine/core'
import { IconCar, IconPackage } from '@tabler/icons-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Job = ({
  data,
  active,
  handleSelect,
}: {
  data: any
  handleSelect: (params: any) => void
  active?: boolean
}) => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(false)
  return (
    <Card
      p="xl"
      sx={{
        width: '100%',
        minHeight: active ? '260px' : '200px',
        boxShadow: '0px 4px 8px 0px rgba(169, 169, 169, 0.35)',
        borderRadius: '10px',
        border: '2px solid',
        borderColor: selected ? '#6a73ef' : 'transparent',
        backgroundColor: selected ? '#f8f9fe' : 'white',
        marginBottom: '8px',
        cursor: 'pointer',
      }}
      onClick={() => {
        setSelected(!selected)
        handleSelect(data.origin)
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
              {data.origin}
            </Text>
            <Text fz="sm">{data.origin_time}</Text>
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
              {data.destination}
            </Text>
            <Text fz="sm">{data.destination_time}</Text>
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
        <LabelledIcon text={data.dimensions} icon={IconPackage} />
        <LabelledIcon text={data.distance} icon={IconCar} />
        <Title order={3}>{data.salary}</Title>
      </Card.Section>

      {active && (
        <Card.Section
          sx={{
            margin: '15px 2px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Title order={1} color="blue" mr="16px">
            {data.time}
          </Title>
          <Button
            color="indigo"
            variant="outline"
            radius="xl"
            onClick={() => navigate('/messages')}
          >
            Chat
          </Button>
          <Button color="indigo" radius="xl" onClick={() => navigate('/map')}>
            Start Now
          </Button>
        </Card.Section>
      )}
    </Card>
  )
}

export default Job
