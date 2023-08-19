import { Flex } from '@mantine/core'
import Locations from '@molecules/Locations'
import Person from '@molecules/Person'

const MapPopup = ({ data }: { data: any }) => {
  return (
    <Flex
      direction="column"
      justify="flex-start"
      align="center"
      sx={{
        width: '390px',
        height: '320px',
        padding: '36px 24px',
        gap: '30px',
        backgroundColor: 'blue',
        borderRadius: '20px',
        position: 'relative',
        bottom: '-180px',
        boxShadow: '0px -6px 14px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Person />
      <Locations data={data} />
    </Flex>
  )
}

export default MapPopup
