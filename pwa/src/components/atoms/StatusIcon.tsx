import { ActionIcon } from '@mantine/core'
import { IconCircle, IconCircleFilled } from '@tabler/icons-react'
import { useMemo } from 'react'

const StatusIcon = ({ status }: { status: 'past' | 'now' | 'future' }) => {
  const icon = useMemo(() => {
    switch (status) {
      case 'past':
        return (
          <ActionIcon variant="filled" radius="xl" size="sm" color="blue">
            <IconCircleFilled size="small" />
          </ActionIcon>
        )
      case 'now':
        return (
          <ActionIcon variant="filled" radius="xl" size="sm" color="blue">
            <IconCircle size="small" />
          </ActionIcon>
        )
      case 'future':
      default:
        return (
          <ActionIcon variant="subtle" radius="xl" size="sm" color="gray">
            <IconCircleFilled size="small" />
          </ActionIcon>
        )
    }
  }, [status])

  return <>{icon}</>
}

export default StatusIcon
