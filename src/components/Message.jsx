import React, { useContext, useEffect, useRef } from 'react';
import { ChatContext } from '../context/ChatContext';
import { AuthContext } from '../context/AuthContext';

const Message = ({ message }) => {

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior:"smooth" });
  }, [message]);

  return (
    <div ref={ref} 
      className={`message ${message.senderId === currentUser.uid && "owner"}`}>
      <div className="messageInfo">
        <img 
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="profile" 
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="contentImg" />}
      </div>
    </div>
  )
}

export default Message;
