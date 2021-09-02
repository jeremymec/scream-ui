import React, { useRef, useEffect } from 'react';

import MessageModel from './models/message'
import Message from './message'

interface MessageListProps {
    messages: MessageModel[]
}

function MessageList(props: MessageListProps) {
    
    return (
        <div className={'messageList'}>
            {props.messages.map((message, i) => 
                <Message message={message} key={i} id={i}></Message>
            ).reverse()}
        </div>
    );
  }

export default MessageList;