import { Flex } from '@mantine/core'
import BlueHeader from '@molecules/BlueHeader'
import NavbarFooter from '@molecules/Navbar'
import { ReactNode } from 'react'

const Wrapper = ({
  children,
  header,
}: {
  children: ReactNode
  header?: string
}) => {
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
      {header && <BlueHeader title={header} />}
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
