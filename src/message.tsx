import React, { useState, useEffect } from 'react';
import TimeAgo from 'react-timeago';

import MessageModel from './models/message'

interface MessageProps {
  message: MessageModel
  key: number
  id: number
}

function Message(props: MessageProps) {

  const [style, setStyle] = useState<React.CSSProperties>({});

  // useEffect(() => {
  //   TimeAgo.addDefaultLocale(en);
  //   const timeAgo = TimeAgo('en-US');
  //   setTimestamp(timeAgo.format(props.message.timestamp));
  // }, [])

  useEffect(() => {
    const length = props.message.text.length;

    if (length < 20) {
      setStyle({fontSize: "4em"});
    } else if (20 <= length && length < 60) {
      setStyle({fontSize: "3.5em"});
    } else if (40 <= length && length < 120) {
      setStyle({fontSize: "2.5em"});
    } else {
      setStyle({fontSize: "2em"});
    }
  }, [props.message.text]);

    return (
      <div className={'messageContainer'} id={String(props.id)}>
        <div className={'messageContent'}>
        <span className={'message'} style={style}>{props.message.text}</span><br/><span className={'messageFooter'}>- {props.message.location}, <TimeAgo date={props.message.timestamp}></TimeAgo></span>
        </div>
      </div>
    );
  }

export default Message;