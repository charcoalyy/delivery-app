import { useMemo, useState } from 'react'
import { Navbar, Flex } from '@mantine/core'
import {
  IconHome2,
  IconBox,
  IconMessage,
  IconSettings,
  IconUserCircle,
  IconMap2,
} from '@tabler/icons-react'
import NavbarIcon from '@atoms/NavbarIcon'
import useUser from '@context/userContext'

const customerTabs = [
  { icon: IconHome2, label: 'Home', nav: 'home' },
  { icon: IconBox, label: 'My Packages', nav: 'track' },
  { icon: IconMessage, label: 'Messages', nav: 'messages' },
  { icon: IconSettings, label: 'Settings', nav: 'settings' },
]

const courierTabs = [
  { icon: IconHome2, label: 'Home', nav: 'home' },
  { icon: IconMap2, label: 'Map', nav: 'map' },
  { icon: IconUserCircle, label: 'Profile', nav: 'profile' },
]

const NavbarFooter = () => {
  var url = location.href.split('/')
  const [active, setActive] = useState(url[url.length - 1])
  const { type } = useUser()

  const navTabs = useMemo(() => {
    const tabs = type === 'courier' ? courierTabs : customerTabs
    return tabs.map((tab) => (
      <NavbarIcon
        {...tab}
        key={tab.label}
        active={
          tab.nav === active || (tab.nav === 'track' && active === 'status')
        }
        handleActive={() => setActive(tab.nav)}
        palette={{
          active: tab.nav === 'track' ? 'orange' : 'blue',
          inactive: 'gray',
        }}
      />
    ))
  }, [type])

  return (
    <Navbar
      width={{ base: '390px' }}
      height="68px"
      sx={{
        backgroundColor: active === ('track' || 'chat') ? 'blue' : '#F9F9F9',
        position: 'absolute',
        boxShadow: '0px -4px 6px 0px rgba(169, 169, 169, 0.25)',
      }}
    >
      <Navbar.Section grow>
        <Flex
          justify="center"
          align="center"
          gap="60px"
          sx={{ height: '100%' }}
        >
          {navTabs}
        </Flex>
      </Navbar.Section>
    </Navbar>
  )
}

export default NavbarFooter
