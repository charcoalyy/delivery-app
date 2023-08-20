import ActionButton from '@atoms/ActionButton'
import Header from '@molecules/Header'
import StatusTimeline from '@organisms/StatusTimeline'
import Wrapper from './Wrapper'

const Status = ({ data, action }: { data: any; action: () => void }) => {
  return (
    <Wrapper>
      <Header title="Delivery Status" subtitle={`Tracking ID: PLACEHOLDER`} />
      <img
        height="150px"
        src="/images/yellow_car.png"
        style={{ margin: '20px 0' }}
      ></img>
      <StatusTimeline data={data} />
      <ActionButton text="Track my delivery" handleClick={action} />
    </Wrapper>
  )
}

export default Status
