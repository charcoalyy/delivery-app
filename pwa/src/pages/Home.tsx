import useUser from '@context/userContext'
import CardSearch from '@organisms/CardSearch'
import Hero from '@organisms/Hero'
import PastDeliveries from '@organisms/PastDeliveries'
import Jobs from '@templates/Jobs'
import Wrapper from '@templates/Wrapper'
import { useMemo } from 'react'

const Home = () => {
  const { type } = useUser()

  const userElements = useMemo(() => {
    switch (type) {
      case 'courier':
        return <Jobs />
      case 'customer':
      default:
        return (
          <>
            <Hero />
            <CardSearch />
            <PastDeliveries />
          </>
        )
    }
  }, [type])
  return (
    <Wrapper header={type === 'courier' ? true : false}>{userElements}</Wrapper>
  )
}

export default Home
