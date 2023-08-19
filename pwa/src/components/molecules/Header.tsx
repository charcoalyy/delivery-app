import Back from '@atoms/Back'
import { Box, Flex, Grid, Title } from '@mantine/core'

interface HeaderProps {
  title: string
  subtitle: string
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <>
      <Back />
      <Flex
        direction="column"
        sx={{
          position: 'relative',
          top: '72px', // temp until header is implemented
        }}
        justify="center"
        align="center"
      >
        <Title order={1}>{title}</Title>
        <Title order={2}>{subtitle}</Title>
      </Flex>
    </>
  )
}

export default Header
