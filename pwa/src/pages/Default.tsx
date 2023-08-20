import useUser from '@context/userContext'
import { Button, Flex } from '@mantine/core'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const Default = () => {
  const { changeType } = useUser()
  const navigate = useNavigate()

  const handleDefault = useCallback(
    (type: 'courier' | 'customer') => {
      changeType(type)
      navigate('/home')
    },
    [changeType]
  )
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      sx={{
        width: '390px',
        height: '844px',
        maxHeight: '844px',
        overflow: 'hidden',
        padding: '20px',
      }}
    >
      <Button
        radius="xl"
        color="indigo"
        onClick={() => handleDefault('courier')}
        sx={{ marginBottom: '8px' }}
      >
        I'm a courier
      </Button>
      <Button
        radius="xl"
        color="indigo"
        onClick={() => handleDefault('customer')}
      >
        I'm a customer
      </Button>
    </Flex>
  )
}

export default Default
