import StatusIcon from '@atoms/StatusIcon'
import { Flex, Timeline } from '@mantine/core'
import TimelineText from '@molecules/TimelineText'
import { useMemo } from 'react'

const timelineConfig = [
  {
    title: 'Order Received',
    desc: 'Package fulfilment at ',
    desc_data: 'origin',
    time: '1:10pm',
  },
  {
    title: 'On the Way',
    desc: 'Picked up from retailer, with estimated arrival ',
    desc_data: 'estimatedArrival',
    time: '1:36pm',
  },
  {
    title: 'Delivered',
    desc: 'Arrived on pending',
    time: '-',
  },
]

const StatusTimeline = ({ data }: { data: any }) => {
  const progress = useMemo(() => data.progress, [data])

  const renderItems = useMemo(
    () =>
      timelineConfig.map((status, i) => (
        <Timeline.Item
          key={status.title}
          bullet={
            <StatusIcon
              status={i === progress ? 'now' : i < progress ? 'past' : 'future'}
            />
          }
          lineVariant="dashed"
          sx={{
            padding: 0,
            borderTop: '1px solid transparent',
            marginBottom: '48px',
            maxWidth: '220px',
            opacity: i > progress ? 0.55 : 1,
          }}
        >
          <TimelineText
            status={status.title}
            desc={`${status.desc} ${
              status.desc_data ? data[status.desc_data] : ''
            }`}
            time={status.time}
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
