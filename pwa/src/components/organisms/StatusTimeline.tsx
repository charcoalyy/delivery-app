import StatusIcon from '@atoms/StatusIcon'
import { Flex, Timeline } from '@mantine/core'
import TimelineText from '@molecules/TimelineText'

const StatusTimeline = () => {
  return (
    <Flex justify="flex-start" sx={{ width: '100%', padding: '45px' }}>
      <Timeline active={0} bulletSize={0} lineWidth={1} color="gray">
        <Timeline.Item
          bullet={<StatusIcon status="past" />}
          lineVariant="dashed"
          sx={{
            padding: 0,
            borderTop: '1px solid transparent',
            marginBottom: '30px',
          }}
        >
          <TimelineText
            status="Order Received"
            desc={`From XXX`}
            time="1:10pm"
          />
        </Timeline.Item>

        <Timeline.Item
          bullet={<StatusIcon status="now" />}
          sx={{ padding: 0, borderTop: '1px solid transparent' }}
          lineVariant="dashed"
        >
          <TimelineText status="Picked Up" desc={`From XXX`} time="1:56pm" />
        </Timeline.Item>

        <Timeline.Item
          bullet={<StatusIcon status="future" />}
          sx={{ padding: 0, borderTop: '1px solid transparent' }}
          lineVariant="dashed"
        >
          <TimelineText
            status="On the Way"
            desc={`Estimated time remaining: XXX`}
          />
        </Timeline.Item>

        <Timeline.Item
          sx={{ padding: 0, borderTop: '1px solid transparent' }}
          lineVariant="dashed"
        >
          <TimelineText
            status="Delivered"
            desc={`Estimated time of arrival: XXX`}
            time="-"
          />
        </Timeline.Item>
      </Timeline>
    </Flex>
  )
}

export default StatusTimeline
