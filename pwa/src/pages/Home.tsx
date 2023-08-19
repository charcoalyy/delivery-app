import CardSearch from '@organisms/CardSearch'
import Hero from '@organisms/Hero'
import PastDeliveries from '@organisms/PastDeliveries'
import Wrapper from '@templates/Wrapper'

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <CardSearch />
      <PastDeliveries />
    </Wrapper>
  )
}

export default Home
