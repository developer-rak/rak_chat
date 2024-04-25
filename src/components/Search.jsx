import React from 'react';

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/19554319/pexels-photo-19554319/free-photo-of-young-woman-in-a-graduation-gown-and-mortarboard-standing-outside.jpeg?auto=compress&cs=tinysrgb&w=600" alt="jane" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search;
