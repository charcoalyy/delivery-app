// import { getMessages } from '@api/messages'
// import useRequest from '@hooks/useRequest'
import { Flex } from '@mantine/core'
import Header from '@molecules/Header'
import Message from '@molecules/Message'
import SendMessage from '@molecules/SendMessage'
import { useMemo } from 'react'

const Chat = () => {
  const messageList = [
    {
      id: '1',
      author: 'man',
      timestamp: '03/28/2023',
      body: 'hey man i just stole ur tv haha',
    },
    {
      id: '2',
      author: 'placeholder',
      timestamp: '03/28/2023',
      body: 'bro wtf',
    },
    {
      id: '3',
      author: 'placeholder',
      timestamp: '03/28/2023',
      body: 'aint no way',
    },
    {
      id: '4',
      author: 'man',
      timestamp: '03/29/2023',
      body: 'lol',
    },
  ] // TODO: set to userrequest

  const displayMessages = useMemo(() => {
    if (messageList?.length) {
      return messageList.map((message: any, i: number, messages: any[]) => {
        return (
          <Message
            key={message.id}
            author={message.author}
            timestamp={message.timestamp}
            body={message.body}
            seen={i === messages.length - 1 && message.seen}
            last={message.author !== messages[i + 1]?.author}
          />
        )
      })
    }
  }, [messageList])

  return (
    <Flex
      direction="column"
      align="center"
      sx={{
        width: '390px',
        height: '844px',
        maxHeight: '844px',
        border: '1px solid green',
      }}
    >
      <Header title="Jason" subtitle="" />
      <Flex
        direction="column"
        sx={{
          width: '100%',
          padding: '30px',
          gap: '4px',
          height: '400px',
          overflowY: 'auto',
        }}
      >
        {displayMessages}
      </Flex>
      <Flex
        direction="column"
        sx={{
          width: '100%',
          padding: '30px',
        }}
      >
        <SendMessage />
      </Flex>
    </Flex>
  )
}

export default Chat
