import Back from '@atoms/Back'
import { Flex, Title } from '@mantine/core'

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
        justify="center"
        align="center"
        mt="72px"
        mb="26px"
      >
        <Title order={1}>{title}</Title>
        <Title order={2}>{subtitle}</Title>
      </Flex>
    </>
  )
}

export default Header
