import React, { useRef, useState, useEffect } from 'react';

import { postMessage } from './service'
import MessageModel, { Location } from './models/message'

interface MessageSenderProps {
  onMessageSend: (message: MessageModel) => void
  locations: string[]
  location: Location
}

function MessageSender(props: MessageSenderProps) {

    const maximumFontSize = 4;

    const [messageText, setMessageText]= useState("");
    const [fontSize, setFontSize] = useState(maximumFontSize)
    const [location, setLocation] = useState<Location>({city: "Unknown"})

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
      setLocation(props.location)
    }, [props.location])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessageText("");
        postMessage({text: messageText, location});
        props.onMessageSend({text: messageText, location});
    }

    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
      const chars = textAreaRef.current!.textContent? textAreaRef.current!.textContent.length : 0;
      
      const realFontSize = maximumFontSize - (Math.cbrt(chars) / 2)

      if (Math.abs(fontSize - realFontSize) > 0.2) {
        setFontSize(realFontSize)
      }

    }

    const handleLocationChange = (e: React.FormEvent<HTMLSelectElement>) => {
      e.preventDefault()
      setLocation({city: (e.target as HTMLSelectElement).value})
    }

    return (
      <div className="messageSenderContainer">
        <form className="messageSenderForm" onSubmit={handleSubmit}>
          <button className="messageButton" type="submit">Scream</button><span className="locationFromText">from</span><select className="locationSelectBox" value={location?.city} onChange={handleLocationChange}>
            <option key={0} disabled={true}>Unknown</option>
            {props.locations.map( (v, k) => <option key={k + 1}>{v}</option> )}
          </select>
          <br></br>
          <textarea ref={textAreaRef} onInput={handleInput} style={{fontSize: fontSize + 'vh'}} maxLength={200} className="messageInput" placeholder="type something" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
        </form>
      </div>
    );
  }

export default MessageSender;