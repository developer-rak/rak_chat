import React from 'react';
import Messages from './Messages';
import Input from './Input';

import Cam from '../assets/cam.png';
import Add from '../assets/add.png';
import More from '../assets/more.png';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
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
