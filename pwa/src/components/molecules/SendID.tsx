import useUser from '@context/userContext'
import { ActionIcon, Text, TextInput, Tooltip } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SendID = () => {
  const [focused, setFocused] = useState(false)
  const [id, setId] = useState('')

  const navigate = useNavigate()
  const { setTrackingId } = useUser()
  // TODO: set auth to have this ID
  return (
    <TextInput
      sx={{ width: '100%' }}
      label="Tracking ID"
      placeholder="123A456B"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={id}
      onChange={(e) => setId(e.target.value)}
      rightSection={
        <ActionIcon
          variant="transparent"
          size="xs"
          onClick={() => {
            navigate(`/status`)
            setTrackingId(id)
          }}
        >
          <IconSearch />
        </ActionIcon>
      }
      inputWrapperOrder={['label', 'error', 'input', 'description']}
      description="Can't find your tracking ID?"
      inputContainer={(children) => (
        <Tooltip
          label="Your tracking ID can be found in your email receipt!"
          position="bottom-start"
          opened={focused}
          sx={{ fontSize: '10px' }}
        >
          {children}
        </Tooltip>
      )}
    />
  )
}

export default SendID
