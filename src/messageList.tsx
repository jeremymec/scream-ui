import React from 'react';

import { getScreams } from './service';
import Message from './message'

interface MessageListProps {

}

function MessageList(props: MessageListProps) {

    const [messages, setMessages] = React.useState<string[]>([])

    React.useEffect(() => {
        getScreams().then(
            results => setMessages(results)
        )
    })
    
    return (
        <div className={'messageList'}>
            {messages.map((message, i) => 
                <Message text={message} key={i} id={i}></Message>
            ).reverse()}
        </div>
    );
  }

export default MessageList;