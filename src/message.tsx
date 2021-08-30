import React from 'react';

interface MessageProps {
  text: string
  key: number
  id: number
}

function Message(props: MessageProps) {
    return (
      <div className={'messageContainer'} id={String(props.id)}>
        <div className={'messageContent'}>
          <span className={'message'}>{props.text}</span><br/><span className={'messageFooter'}>- Wellington, NZ</span>
        </div>
      </div>
    );
  }

export default Message;