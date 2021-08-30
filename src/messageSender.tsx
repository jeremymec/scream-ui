import React, { useRef, useState } from 'react';

import { postScream } from './service'

interface MessageSenderProps {
  
}

function MessageSender(props: MessageSenderProps) {

    const maximumFontSize = 4;

    const [messageText, setMessageText]= useState("");
    const [fontSize, setFontSize] = useState(maximumFontSize)
    const [textAreaHeight, setTextAreaHeight] = useState(0)

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postScream(messageText);
        setMessageText("");
    }

    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
      console.log("Event")
      const chars = textAreaRef.current!.textContent? textAreaRef.current!.textContent.length : 0;
      
      const realFontSize = maximumFontSize - (Math.cbrt(chars) / 3)

      if (Math.abs(fontSize - realFontSize) > 0.2) {
        setFontSize(realFontSize)
      }

    }

    return (
      <div className="messageSenderContainer">
        <form className="messageSenderForm" onSubmit={handleSubmit}>
          <button className="messageButton" type="submit">Scream</button>
          <br></br>
          <textarea ref={textAreaRef} onInput={handleInput} style={{fontSize: fontSize + 'vh'}} className="messageInput" placeholder="type something" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
        </form>
      </div>
    );
  }

export default MessageSender;