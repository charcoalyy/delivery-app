import { Switch } from '@mantine/core'
import { useState } from 'react'

const Online = () => {
  const [checked, setChecked] = useState(true)
  return (
    <div style={{ position: 'absolute', top: '64px', left: '16px', zIndex: 1 }}>
      <Switch
        color="orange"
        checked={checked}
        onChange={() => setChecked(!checked)}
        label="Orange"
        sx={{
          '&	.mantine-Switch-label': {
            color: 'white',
            fontSize: '10px',
            marginLeft: '-4px',
          },
        }}
      />
    </div>
  )
}

export default Online
