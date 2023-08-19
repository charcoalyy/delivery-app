import Shipping from '@forms/Shipping'
import Information from '@templates/Information'
import { Flex } from '@mantine/core'
import { useMemo, useState } from 'react'

const Checkout = () => {
  const [submitted, setSubmitted] = useState<any>(null)

  const body = useMemo(() => {
    switch (submitted) {
      case null:
      case undefined:
        return <Shipping setSubmitted={setSubmitted} />
      default:
        return (
          <Information
            trackingId={submitted?.trackingId}
            fee={submitted?.fee}
          />
        )
    }
  }, [submitted])

  return (
    <Flex
      sx={{ width: '100vw', height: '100vh' }}
      justify="center"
      align="center"
    >
      {body}
    </Flex>
  )
}

export default Checkout
