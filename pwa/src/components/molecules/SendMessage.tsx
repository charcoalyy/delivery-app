import { sendMessage } from '@api/messages'
import useRequest from '@hooks/useRequest'
import { ActionIcon, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconSend } from '@tabler/icons-react'
import { useCallback } from 'react'

const SendMessage = ({ update }: { update: (params: any) => void }) => {
  const form = useForm({
    initialValues: { message: '' },
  })

  const { makeRequest } = useRequest({
    request: sendMessage,
    requestByDefault: false,
  })

  const handleSend = useCallback(() => {
    if (form.getTransformedValues().message.length) {
      makeRequest(form.getTransformedValues())
      update(form.getTransformedValues().message)
    }
  }, [form])

  return (
    <TextInput
      placeholder="Send a message!"
      {...form.getInputProps('message')}
      rightSection={
        <ActionIcon variant="transparent" size="xs" onClick={handleSend}>
          <IconSend />
        </ActionIcon>
      }
    />
  )
}

export default SendMessage
