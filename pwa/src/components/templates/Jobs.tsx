import { Flex, Stack, Tabs } from '@mantine/core'
import Job from '@organisms/Job'

const Jobs = () => {
  return (
    <>
      <Tabs sx={{ width: '100%' }} color="orange">
        <Tabs.List grow>
          <Tabs.Tab value="gallery">New Orders</Tabs.Tab>
          <Tabs.Tab value="messages">Active Orders</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Stack
        sx={{
          width: '100%',
          height: '420px',
          padding: '16px',
          backgroundColor: '#E8E9F3',
          overflowY: 'scroll',
        }}
        justify="flex-start"
        align="center"
      >
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
      </Stack>
    </>
  )
}

export default Jobs
