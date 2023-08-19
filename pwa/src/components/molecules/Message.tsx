import { Flex, Grid, Text } from '@mantine/core'

interface MessageProps {
  author: string
  timestamp: string
  body: string
  seen?: boolean
  last?: boolean
}

export default ({ author, timestamp, body, seen, last }: MessageProps) => {
  const user = 'placeholder' // TODO: set to auth

  return (
    <Grid
      justify={author !== user ? 'flex-start' : 'flex-end'}
      sx={{ pr: '8px', cursor: 'default' }}
    >
      <Grid.Col
        span={9}
        sx={{
          mb: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        <Flex
          sx={{
            backgroundColor: author !== user ? 'orange' : 'blue',
            color: author !== user ? 'black' : 'white',
            padding: '10px 15px',
            borderRadius: '5px',
          }}
        >
          <Text fz="sm">{body}</Text>
        </Flex>

        {last && (
          <Text
            fz="xs"
            align={author !== user ? 'left' : 'right'}
            sx={{ opacity: '0.5', marginBottom: '8px' }}
          >
            {seen && author !== user
              ? 'Seen'
              : `Sent ${timestamp.substring(0, 16)}`}
          </Text>
        )}
      </Grid.Col>
    </Grid>
  )
}
