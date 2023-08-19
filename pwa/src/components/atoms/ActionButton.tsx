import { Button } from '@mantine/core'

const ActionButton = ({ text }: { text: string }) => {
  return (
    <Button
      sx={{
        width: '320px',
        position: 'absolute',
        left: '35px',
        bottom: '50px',
        backgroundColor: 'orange',
        transition: 'all 0.3s',

        '&:hover': {
          backgroundColor: 'orange',
          opacity: '0.75',
        },
      }}
      radius="xl"
    >
      {text}
    </Button>
  )
}

export default ActionButton
