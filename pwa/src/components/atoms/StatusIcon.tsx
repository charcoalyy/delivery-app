import { ActionIcon } from '@mantine/core'
import { IconCircle, IconCircleFilled } from '@tabler/icons-react'
import { useMemo } from 'react'

const StatusIcon = ({ status }: { status: 'past' | 'now' | 'future' }) => {
  const icon = useMemo(() => {
    switch (status) {
      case 'past':
        return (
          <ActionIcon variant="transparent" radius="xl" size="xs" color="blue">
            <IconCircle size="small" />
          </ActionIcon>
        )
      case 'now':
        return (
          <ActionIcon variant="light" radius="xl" size="xs" color="blue">
            <IconCircleFilled size="small" />
          </ActionIcon>
        )
      case 'future':
      default:
        return (
          <ActionIcon variant="transparent" radius="xl" size="xs" color="gray">
            <IconCircleFilled size="small" />
          </ActionIcon>
        )
    }
  }, [status])

  return <>{icon}</>
}

export default StatusIcon
