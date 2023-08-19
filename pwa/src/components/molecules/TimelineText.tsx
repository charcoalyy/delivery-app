import { Grid, Text, Title } from '@mantine/core'

interface TimelineTextProps {
  status: string
  desc: string
  time?: string
}

const TimelineText = ({ status, desc, time }: TimelineTextProps) => {
  return (
    <Grid
      sx={{
        width: '110%',
        marginLeft: '36px',
        marginTop: '-14px',
      }}
    >
      <Grid.Col span={11} sx={{ padding: 0 }}>
        <Title order={3}>{status}</Title>
        <Text fz="xs">{desc}</Text>
      </Grid.Col>
      <Grid.Col span={1} sx={{ padding: 0 }}>
        <Text fz="xs">{time}</Text>
      </Grid.Col>
      <Grid.Col span={12}></Grid.Col>
    </Grid>
  )
}

export default TimelineText
