import ActionButton from '@atoms/ActionButton'
import useUser from '@context/userContext'
import { Flex, Title, Text } from '@mantine/core'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SessionStart = () => {
  const navigate = useNavigate()
  const { type } = useUser()

  useEffect(() => {
    if (type === 'customer') {
      navigate('/home')
    }
  }, [type])

  return (
    <Flex
      direction="column"
      sx={{
        backgroundColor: 'blue',
        width: '390px',
        height: '844px',
        maxHeight: '844px',
        overflow: 'hidden',
      }}
    >
      <img
        src="images/wheel.png"
        style={{ position: 'absolute', left: -500, top: -350, zIndex: 0 }}
        width="850px"
        height="850px"
      ></img>
      <div
        style={{
          width: '75%',
          marginBottom: '20px',
          padding: '120px 30px',
          zIndex: 1,
        }}
      >
        <Title order={1} color="white">
          Hello, Jason!
        </Title>
        <Text color="white" fz="sm">
          You are currently offline. New orders are waiting for you!
        </Text>
      </div>
      <ActionButton text="Go Online" handleClick={() => navigate('/home')} />
    </Flex>
  )
}

export default SessionStart
