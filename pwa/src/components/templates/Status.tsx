import ActionButton from '@atoms/ActionButton'
import Header from '@molecules/Header'
import StatusTimeline from '@organisms/StatusTimeline'
import Wrapper from './Wrapper'
import ErrorNotice from './ErrorNotice'
import { useMemo } from 'react'

const Status = ({ data, action }: { data: any; action: () => void }) => {
  const progress = useMemo(() => {
    if (data) {
      switch (data.status) {
        case 'delivered':
          return 2
        case 'on the way':
          return 1
        case 'order received':
        default:
          return 0
      }
    }
  }, [data])

  return (
    <Wrapper>
      <Header title="Delivery Status" subtitle={`Tracking ID: PLACEHOLDER`} />
      <img
        height="150px"
        src="/images/yellow_car.png"
        style={{ margin: '20px 0' }}
      ></img>
      {data ? (
        <StatusTimeline
          data={{
            ...data,
            progress: progress,
          }}
        />
      ) : (
        <ErrorNotice />
      )}
      <ActionButton text="Track my delivery" handleClick={action} />
    </Wrapper>
  )
}

export default Status
