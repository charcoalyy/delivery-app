import StatusIcon from '@atoms/StatusIcon'
import { Flex, Timeline } from '@mantine/core'
import TimelineText from '@molecules/TimelineText'
import { useMemo } from 'react'

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

const StatusTimeline = ({ data }: { data: any }) => {
  const progress = useMemo(() => data.progress, data) // TODO: set to data

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
            marginBottom: '28px',
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
    </Flex>
  )
}

export default StatusTimeline
