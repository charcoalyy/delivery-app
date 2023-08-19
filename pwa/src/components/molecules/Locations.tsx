import { ActionIcon, Flex, Grid, Text } from '@mantine/core'
import { IconCircleDotFilled, IconMapPinFilled } from '@tabler/icons-react'

const Locations = ({ data }: { data: any }) => {
  return (
    <Grid sx={{ width: '100%' }}>
      <Grid.Col span={12} sx={{ display: 'flex', gap: '16px' }}>
        <ActionIcon color="orange">
          <IconCircleDotFilled />
        </ActionIcon>
        <Flex
          justify="space-between"
          sx={{ flexGrow: 1, borderBottom: '1px solid orange' }}
        >
          <Text weight="700" fz="sm" color="white">
            From
          </Text>
          <Text weight="400" fz="xs" color="white">
            XXX
          </Text>
        </Flex>
      </Grid.Col>
      <Grid.Col span={12} sx={{ display: 'flex', gap: '16px' }}>
        <ActionIcon color="orange">
          <IconMapPinFilled color="orange" />
        </ActionIcon>
        <Flex
          justify="space-between"
          sx={{ flexGrow: 1, borderBottom: '1px solid orange' }}
        >
          <Text weight="700" fz="sm" color="white">
            To
          </Text>
          <Text weight="400" fz="xs" color="white">
            XXX
          </Text>
        </Flex>
      </Grid.Col>
    </Grid>
  )
}

export default Locations
