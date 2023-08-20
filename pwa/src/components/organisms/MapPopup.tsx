import { Flex } from '@mantine/core'
import Locations from '@molecules/Locations'
import Person from '@molecules/Person'
import ErrorNotice from '@templates/ErrorNotice'

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
        position: 'absolute',
        bottom: '0px',
        boxShadow: '0px -6px 14px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Person />
      {data ? <Locations data={data} /> : <ErrorNotice />}
    </Flex>
  )
}

export default MapPopup
