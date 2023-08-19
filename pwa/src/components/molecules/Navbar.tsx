import { useState } from 'react'
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  rem,
  Flex,
} from '@mantine/core'
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
} from '@tabler/icons-react'

interface NavbarProps {
  icon: React.FC<any>
  label: string
  active?: boolean
  onClick?(): void
}

const NavbarLink = ({ icon: Icon, label, onClick }: NavbarProps) => {
  return (
    <Tooltip label={label} position="bottom">
      <UnstyledButton onClick={onClick}>
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  )
}

const tabs = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
]

const NavbarFooter = () => {
  const [active, setActive] = useState(0)

  const links = tabs.map((tab, index) => (
    <NavbarLink
      {...tab}
      key={tab.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ))

  return (
    <Navbar
      width={{ base: '390px' }}
      height="68px"
      sx={{
        border: '1px solid red',
        backgroundColor: 'blue',
        position: 'absolute',
      }}
    >
      <Navbar.Section grow>
        <Flex
          justify="center"
          align="center"
          gap="66px"
          sx={{ height: '100%' }}
        >
          {links}
        </Flex>
      </Navbar.Section>
    </Navbar>
  )
}

export default NavbarFooter
