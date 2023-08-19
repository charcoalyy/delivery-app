import { ActionIcon, Avatar, Grid, Text } from '@mantine/core'
import { IconMessage, IconPhoneCall } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'

const Person = () => {
  const navigate = useNavigate()
  return (
    <Grid sx={{ width: '100%' }}>
      <Grid.Col span={2}>
        <Avatar
          src="images/avatar.jpg"
          alt="profile photo of delivery driver"
          radius="xl"
        />
      </Grid.Col>
      <Grid.Col span={8} sx={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <Text fz="sm" weight="700" color="white" mb="-4px">
            Jason
          </Text>
          <Text fz="xs" color="white">
            is taking care of your package!
          </Text>
        </div>
      </Grid.Col>
      <Grid.Col span={1} sx={{ display: 'flex', alignItems: 'center' }}>
        <ActionIcon
          variant="transparent"
          radius="xl"
          size="sm"
          color="white"
          onClick={() => navigate('/messages')}
        >
          <IconMessage color="white" />
        </ActionIcon>
      </Grid.Col>
      <Grid.Col span={1} sx={{ display: 'flex', alignItems: 'center' }}>
        <ActionIcon variant="transparent" radius="xl" size="sm" color="white">
          <IconPhoneCall color="white" />
        </ActionIcon>
      </Grid.Col>
    </Grid>
  )
}

export default Person
