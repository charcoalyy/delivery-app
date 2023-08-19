import { ActionIcon, Text, TextInput, Tooltip } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SendID = () => {
  const [focused, setFocused] = useState(false)

  const navigate = useNavigate()
  // TODO: set auth to have this ID
  return (
    <TextInput
      sx={{ width: '100%' }}
      label="Tracking ID"
      placeholder="123A456B"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      rightSection={
        <ActionIcon
          variant="transparent"
          size="xs"
          onClick={() => navigate('/track')}
        >
          <IconSearch />
        </ActionIcon>
      }
      inputWrapperOrder={['label', 'error', 'input', 'description']}
      description="Can't find your tracking ID?"
      inputContainer={(children) => (
        <Tooltip
          label="Your tracking ID can be found in your email receipt or original order page!"
          position="bottom-start"
          opened={focused}
        >
          {children}
        </Tooltip>
      )}
    />
  )
}

export default SendID
