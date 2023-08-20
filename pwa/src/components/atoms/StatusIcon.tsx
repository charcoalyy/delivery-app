import { ActionIcon } from '@mantine/core'
import { IconCircle, IconCircleFilled } from '@tabler/icons-react'
import { useMemo } from 'react'

const StatusIcon = ({ status }: { status: 'past' | 'now' | 'future' }) => {
  const icon = useMemo(() => {
    switch (status) {
      case 'past':
        return (
          <ActionIcon variant="transparent" radius="xl" size="xs" color="blue">
            <IconCircle color="blue" />
          </ActionIcon>
        )
      case 'now':
        return (
          <ActionIcon variant="light" radius="xl" size="xs" color="indigo">
            <IconCircleFilled />
          </ActionIcon>
        )
      case 'future':
      default:
        return (
          <ActionIcon variant="transparent" radius="xl" size="xs" color="gray">
            <IconCircleFilled />
          </ActionIcon>
        )
    }
  }, [status])

  return <>{icon}</>
}

export default StatusIcon
