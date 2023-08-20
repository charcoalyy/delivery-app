import { ActionIcon, Group, Text } from '@mantine/core'

const LabelledIcon = ({
  text,
  icon: Icon,
}: {
  text: string
  icon: React.FC<any>
}) => {
  return (
    <Group spacing="2px">
      <ActionIcon color="blue" variant="transparent">
        <Icon />
      </ActionIcon>
      <Text fz="xs">{text}</Text>
    </Group>
  )
}

export default LabelledIcon
