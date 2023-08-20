import { Group, Stack, Title, Text, ActionIcon, Flex } from '@mantine/core'
import { IconPackage, IconStarFilled } from '@tabler/icons-react'

const ProfileInfo = () => {
  return (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        padding: '30px',
        marginTop: '-20px',
        backgroundColor: '#f3f3f3',
        overflowY: 'scroll',
      }}
      justify="flex-start"
      align="center"
    >
      <div
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '100%',
          backgroundColor: 'blue',
          position: 'relative',
          top: -100,
          zIndex: 0,
        }}
      ></div>
      <Stack
        align="center"
        sx={{ position: 'relative', top: '-180px', zIndex: 1 }}
      >
        <div
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '100%',
            overflow: 'hidden',
          }}
        >
          <img
            src="images/avatar.jpg"
            style={{ maxWidth: '100%', height: 'auto' }}
          ></img>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Title order={3}>Jason Smith</Title>
          <Text fz="sm">Delivering since 08/02/2022</Text>
        </div>
        <Stack spacing="xs" align="center">
          <Group spacing="4px">
            <ActionIcon color="blue" variant="transparent" size="xs">
              <IconStarFilled />
            </ActionIcon>
            <Text>4.9 rating</Text>
          </Group>

          <Group spacing="4px">
            <ActionIcon color="blue" variant="transparent" size="xs">
              <IconPackage />
            </ActionIcon>
            <Text>54 deliveries</Text>
          </Group>
        </Stack>
        <Flex
          direction="column"
          justify="center"
          align="center"
          sx={{
            width: '300px',
            borderRadius: '10px',
            padding: '20px',
            backgroundColor: '#FB7B05',
            color: 'white',
            margin: '12px 0',
          }}
        >
          <Text>You've earned</Text>
          <Text weight={700} sx={{ fontSize: '28px' }}>
            $2081.13
          </Text>
          <Text>this month.</Text>
        </Flex>
      </Stack>
    </Stack>
  )
}

export default ProfileInfo
