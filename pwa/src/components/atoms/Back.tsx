import { ActionIcon } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'

const Back = () => {
  const navigate = useNavigate()

  return (
    <ActionIcon
      onClick={() => navigate(-1)}
      sx={{ position: 'absolute', top: '72px', left: '16px', zIndex: 1 }}
    >
      <IconArrowLeft color="black" />
    </ActionIcon>
  )
}

export default Back
