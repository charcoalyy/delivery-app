import { getStatus } from '@api/status'
import ActionButton from '@atoms/ActionButton'
import StatusIcon from '@atoms/StatusIcon'
import useRequest from '@hooks/useRequest'
import { Flex, Timeline } from '@mantine/core'
import TimelineText from '@molecules/TimelineText'
import { useMemo, useState } from 'react'

const timelineConfig = [
  {
    title: 'Order Received',
    desc: 'From ',
    time: '1:10pm',
  },
  {
    title: 'Picked Up',
    desc: 'From ',
    time: '1:36pm',
  },
  {
    title: 'On the Way',
    desc: 'Estimated time remaining: ',
    time: '',
  },
  {
    title: 'Delivered',
    desc: 'Estimated time of arrival: ',
    time: '-',
  },
]

const StatusTimeline = () => {
  const data = useRequest({
    request: getStatus,
    requestByDefault: true,
  })

  const [progress, setProgress] = useState(2) // TODO: set to data

  const renderItems = useMemo(
    () =>
      timelineConfig.map((status, i) => (
        <Timeline.Item
          bullet={
            <StatusIcon
              status={i === progress ? 'now' : i < progress ? 'past' : 'future'}
            />
          }
          lineVariant="dashed"
          sx={{
            padding: 0,
            borderTop: '1px solid transparent',
            marginBottom: '30px',
          }}
        >
          <TimelineText
            status={status.title}
            desc={`${status.desc} XXX`}
            time={status.time} // TODO: replace with API data
          />
        </Timeline.Item>
      )),
    [data]
  )

  return (
    <Flex justify="flex-start" sx={{ width: '100%', padding: '45px' }}>
      <Timeline active={0} bulletSize={0} lineWidth={1} color="gray">
        {renderItems}
      </Timeline>
      <ActionButton text="Track my delivery" />
    </Flex>
  )
}

export default StatusTimeline
