import React, { useEffect, useRef } from 'react';

import MessageModel from './models/message'
import MessageList from './messageList'
import MessageSender from './messageSender';
import { getMessages } from './service';
import { getCountry } from './locationService';

function App() {

    const [messages, setMessages] = React.useState<MessageModel[]>([])
    const [location, setLocation] = React.useState('Unknown')

    const endOfPageRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        getMessages().then(results => {
            console.log(results)
            setMessages(results)
            const timer = setTimeout(() => {
                window.scrollTo(0, 10000);
              }, 5);
              return () => clearTimeout(timer);
        })
    }, []);

    useEffect(() => {
        getCountry().then(res => setLocation(res))
    }, [])

    const messageSendCallback = (message: MessageModel) => {
        setMessages([message, ...messages.splice(0,9)])
    }

    return(
        <div className="root">
            <MessageList messages={messages}></MessageList>
            <MessageSender onMessageSend={messageSendCallback} location={location}></MessageSender>
            <div ref={endOfPageRef}></div>
        </div>
    );
}

export default App;