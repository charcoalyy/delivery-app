import { Flex, Text, ActionIcon } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

interface NavbarProps {
  icon: React.FC<any>
  label: string
  active: boolean
  handleActive: () => void
  nav: string
}

const NavbarIcon = ({
  icon: Icon,
  label,
  nav,
  active,
  handleActive,
}: NavbarProps) => {
  const navigate = useNavigate()
  return (
    <Flex
      direction="column"
      align="center"
      onClick={() => {
        navigate(`/${nav}` || '/')
        handleActive()
      }}
    >
      <ActionIcon variant="transparent" color={active ? 'orange' : 'white'}>
        <Icon />
      </ActionIcon>
      <Text
        color={active ? 'orange' : 'white'}
        sx={{ fontSize: '8px' }}
        align="center"
      >
        {label}
      </Text>
    </Flex>
  )
}

export default NavbarIcon
