import React from 'react';
import { useHistory } from 'react-router-dom'
import User from './Models/User';

function Login() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const room = e.target.room.value;
    const language = e.target.language.value
    const user = new User(name, room, language);

    history.push({
      pathname: '/chat',
      state: { user: user },
    })
  }

  return (
    <div className='join-container'>
      <header className="join-header">
        <h1><i className="fas fa-smile"></i>Multi Languages Chat</h1>
      </header>
      <main className="join-main">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username..."
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="room">Room</label>
            <select name="room" id="room">
              <option value="Room 1">Room 1</option>
              <option value="Room 2">Room 2</option>
              <option value="Room 3">Room 3</option>
              <option value="Room 4">Room 4</option>
              <option value="Room 5">Room 5</option>
              <option value="Room 6">Room 6</option>
              <option value="Room 7">Room 7</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="language">Language</label>
            <select name="language" id="language">
              <option value="en">English</option>
              <option value="vi">Việt Nam</option>
              <option value="ja">日本語</option>
              <option value="fr">French</option>
            </select>
          </div>
          <button type='submit' className="btn">Join Chat</button>
        </form>
      </main>
    </div>
  )
}

export default Login
