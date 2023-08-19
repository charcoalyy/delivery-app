import { useState } from 'react'
import { Navbar, Flex } from '@mantine/core'
import {
  IconHome2,
  IconBox,
  IconMessage,
  IconSettings,
} from '@tabler/icons-react'
import NavbarIcon from '@atoms/NavbarIcon'

const userTabs = [
  { icon: IconHome2, label: 'Home', nav: '' },
  { icon: IconBox, label: 'My Packages', nav: 'track' },
  { icon: IconMessage, label: 'Messages', nav: 'messages' },
  { icon: IconSettings, label: 'Settings', nav: '' },
]

const NavbarFooter = () => {
  var url = location.href.split('/')
  const [active, setActive] = useState(url[url.length - 1])

  const navTabs = userTabs.map((tab) => (
    <NavbarIcon
      {...tab}
      key={tab.label}
      active={tab.nav === active}
      handleActive={() => setActive(tab.nav)}
    />
  ))

  return (
    <Navbar
      width={{ base: '390px' }}
      height="68px"
      sx={{
        backgroundColor: 'blue',
        position: 'absolute',
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
