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
        bottom: '86px',
        backgroundColor: '#FB7F0D',
        transition: 'all 0.3s',
        zIndex: 2,

        '&:hover': {
          backgroundColor: '#FB7B05',
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
