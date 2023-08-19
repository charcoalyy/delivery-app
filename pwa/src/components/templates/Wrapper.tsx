import { Flex } from '@mantine/core'
import NavbarFooter from '@molecules/Navbar'
import { ReactNode } from 'react'

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      direction="column"
      align="space-between"
      sx={{
        width: '390px',
        height: '844px',
        maxHeight: '844px',
        overflow: 'hidden',
      }}
    >
      <Flex
        direction="column"
        align="center"
        sx={{
          width: '390px',
          height: '766px',
          maxHeight: '766px',
          overflow: 'hidden',
        }}
      >
        {children}
      </Flex>
      <NavbarFooter />
    </Flex>
  )
}

export default Wrapper
