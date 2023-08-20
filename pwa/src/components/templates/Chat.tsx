// import { getMessages } from '@api/messages'
// import useRequest from '@hooks/useRequest'
import { Flex } from '@mantine/core'
import Header from '@molecules/Header'
import Message from '@molecules/Message'
import SendMessage from '@molecules/SendMessage'
import { useMemo, useState } from 'react'
import Wrapper from './Wrapper'

const Chat = () => {
  const [messageList, setMessageList] = useState([
    {
      id: 1,
      author: 'courier',
      timestamp: '03/28/2023',
      body: 'hey man i gotchu, ur tv will be there soon',
    },
    {
      id: 2,
      author: 'customer',
      timestamp: '03/28/2023',
      body: 'absolute goat',
    },
    {
      id: 3,
      author: 'customer',
      timestamp: '03/28/2023',
      body: 'thanks jason',
    },
    {
      id: 4,
      author: 'courier',
      timestamp: '03/29/2023',
      body: 'wait im stuck in traffic',
    },
  ]) // TODO: set to userrequest

  // TODO: set to re-calling request
  const updateMessages = (message: string) => {
    setMessageList([
      ...messageList,
      {
        id: messageList.length + 1,
        author: 'customer',
        body: message,
        timestamp: '03/29/2023',
      },
    ])
  }

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
    <Wrapper>
      <Header title="Jason" subtitle="" />
      <Flex
        direction="column"
        sx={{
          width: '100%',
          padding: '30px',
          gap: '4px',
          height: '600px',
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
        <SendMessage update={updateMessages} />
      </Flex>
    </Wrapper>
  )
}

export default Chat
