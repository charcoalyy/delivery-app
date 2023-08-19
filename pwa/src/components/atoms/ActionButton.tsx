import { Button } from '@mantine/core'

const ActionButton = ({
  text,
  handleClick,
}: {
  text: string
  handleClick: () => void
}) => {
  return (
    <Button
      sx={{
        width: '320px',
        position: 'absolute',
        left: '35px',
        bottom: '50px',
        backgroundColor: 'orange',
        transition: 'all 0.3s',
        zIndex: 2,

        '&:hover': {
          backgroundColor: 'orange',
          opacity: '0.75',
        },
      }}
      radius="xl"
      onClick={handleClick}
    >
      {text}
    </Button>
  )
}

export default ActionButton
