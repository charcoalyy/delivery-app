import useUser from '@context/userContext'
import ProfileInfo from '@templates/ProfileInfo'
import Wrapper from '@templates/Wrapper'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const { type } = useUser()
  const navigate = useNavigate()

  if (type !== 'courier') {
    navigate('/')
  }

  return (
    <Wrapper header="Profile">
      <ProfileInfo />
    </Wrapper>
  )
}

export default Profile
