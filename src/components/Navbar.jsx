import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>rak Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/19554319/pexels-photo-19554319/free-photo-of-young-woman-in-a-graduation-gown-and-mortarboard-standing-outside.jpeg?auto=compress&cs=tinysrgb&w=600" alt="user" />
        <span>Simran</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar;
