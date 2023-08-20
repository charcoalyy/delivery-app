import { Flex, Tabs } from '@mantine/core'
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
      <Flex
        sx={{
          width: '100%',
          height: '100%',
          padding: '16px',
          backgroundColor: '#E8E9F3',
        }}
        direction="column"
        justify="flex-start"
        align="center"
      >
        <Job />
      </Flex>
    </>
  )
}

export default Jobs
