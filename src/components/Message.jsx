import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { AuthContext } from '../context/AuthContext';

const Message = ({ message }) => {

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);


  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img 
          // src= {}
          alt="profile" 
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://images.pexels.com/photos/19554319/pexels-photo-19554319/free-photo-of-young-woman-in-a-graduation-gown-and-mortarboard-standing-outside.jpeg?auto=compress&cs=tinysrgb&w=600" alt="contentImg" />
      </div>
    </div>
  )
}

export default Message;
