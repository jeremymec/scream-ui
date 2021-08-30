import React, { useEffect, useLayoutEffect, useRef } from 'react';

import MessageList from './messageList'
import MessageSender from './messageSender';

function App() {

    const endOfPageRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        endOfPageRef.current!.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return(
        <div className="root">
            <MessageList></MessageList>
            <MessageSender></MessageSender>
            <div ref={endOfPageRef}></div>
        </div>
    );
}

export default App;