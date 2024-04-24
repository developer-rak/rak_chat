import React from 'react';
import '../style.scss';

import Add from '../assets/addAvatar.png';

const Register = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
         <span className='logo'>rak Chat</span>
         <span className='title'>Register</span>
         <form>
            <input type="text" placeholder='name' />
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <input style={{ display: 'none' }} type="file" id='file' />
            <label htmlFor="file">
               <img src={Add} alt="Avatar" />
               <span>add an avatar</span>
            </label>
            <button>Sign up</button>
         </form>
         <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register;