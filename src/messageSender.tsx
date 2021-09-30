import React, { useRef, useState } from 'react';

import { postMessage } from './service'
import MessageModel from './models/message'

interface MessageSenderProps {
  onMessageSend: (message: MessageModel) => void
  location: string
}

function MessageSender(props: MessageSenderProps) {

    const maximumFontSize = 4;

    const [messageText, setMessageText]= useState("");
    const [fontSize, setFontSize] = useState(maximumFontSize)

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Check string is not empty
        if (!messageText.trim().length) { return; }
        
        setMessageText("");
        const message = {text: messageText, location: props.location, timestamp: new Date()}
        postMessage(message);
        props.onMessageSend(message);
    }

    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
      const chars = textAreaRef.current!.textContent? textAreaRef.current!.textContent.length : 0;

      let realFontSize = maximumFontSize - (Math.cbrt(chars) / 2.65);

      if (chars < 30) { realFontSize = maximumFontSize; }

      if (Math.abs(fontSize - realFontSize) > 0.5) {
        setFontSize(realFontSize)
      }

    }

    return (
      <div className="messageSenderContainer">
        <form className="messageSenderForm" onSubmit={handleSubmit}>
          <button className="messageButton" type="submit">Scream</button>
          <br></br>
          <textarea ref={textAreaRef} onInput={handleInput} style={{fontSize: fontSize + 'vh'}} maxLength={200} className="messageInput" placeholder="type something" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
        </form>
      </div>
    );
  }

export default MessageSender;