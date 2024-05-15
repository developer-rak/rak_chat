import React, { useContext } from 'react';
import Messages from './Messages';
import Input from './Input';

import Cam from '../assets/cam.png';
import Add from '../assets/add.png';
import More from '../assets/more.png';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="cam" />
          <img src={Add} alt="Add" />
          <img src={More} alt="More" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat;
