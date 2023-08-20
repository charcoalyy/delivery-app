import Online from '@atoms/Online'
import { Flex, Title } from '@mantine/core'

interface HeaderProps {
  title: string
}

const BlueHeader = ({ title }: HeaderProps) => {
  return (
    <>
      <Online />
      <Flex
        direction="column"
        justify="flex-end"
        align="center"
        // mb="16px"
        sx={{ backgroundColor: 'blue', height: '111px' }}
      >
        <Title order={1} mb="20px" color="white">
          {title}
        </Title>
      </Flex>
    </>
  )
}

export default BlueHeader
