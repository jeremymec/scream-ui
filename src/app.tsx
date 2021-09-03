import React, { useEffect, useLayoutEffect, useRef } from 'react';

import MessageModel, { Location } from './models/message'
import MessageList from './messageList'
import MessageSender from './messageSender';
import { getMessages } from './service';
import { getCity, locationList } from './locationService';

function App() {

    const [messages, setMessages] = React.useState<MessageModel[]>([])
    const [location, setLocation] = React.useState<Location>({city: "Unknown"})

    const endOfPageRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        getMessages().then(results => {
            setMessages(results)
            const timer = setTimeout(() => {
                window.scrollTo(0, 10000);
              }, 5);
              return () => clearTimeout(timer);
        })
    }, []);

    useEffect(() => {
        getCity().then(res => setLocation({city: res}))
    }, [])

    const messageSendCallback = (message: MessageModel) => {
        setMessages([message, ...messages.slice(0, -1)])
    }

    return(
        <div className="root">
            <MessageList messages={messages}></MessageList>
            <MessageSender onMessageSend={messageSendCallback} locations={locationList} location={location}></MessageSender>
            <div ref={endOfPageRef}></div>
        </div>
    );
}

export default App;