import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import io from 'socket.io-client';
import ChatForm from './ChatForm';
import ChatMessages from './ChatMessages';
import ChatSidebar from './ChatSidebar';

let socket;

function Chat() {
  const history = useHistory();
  const location = useLocation();

  const [messages, setMessages] = useState([]);
  const [roomName, setRoomName] = useState('');
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (!location.state)
      return history.push({ pathname: '/' });
    socket = io(process.env.REACT_APP_API_URL);
    const { user } = location.state;
    socket.emit('join', user);

    socket.on('message', (message) => {
      setMessages(prevState => [...prevState, message]);
    });

    socket.on('roomUsers', (roomUsers) => {
      setRoomName(roomUsers.room);
      setUsers(roomUsers.users);
    });

    return (() => socket.close());

  }, [location.state, history]);

  const handleSendMessage = (message) => {
    socket.emit('sendMessage', message);
  };

  const handleLeaveRoom = () => {
    const leaveRoom = window.confirm('Are you sure you want to leave the chatroom?');
    if (!leaveRoom) return;

    return history.push({ pathname: '/' });
  }
  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1><i className="fas fa-smile"></i>Multi Languages Chat</h1>
        <button onClick={handleLeaveRoom} href='/' id="leave-btn" className="btn">Leave Room</button>
      </header>
      <main className="chat-main">
        <ChatSidebar roomName={roomName} users={users} />
        <ChatMessages messages={messages} user={location.state?.user || {}} />
      </main>
      <ChatForm onSendMessage={handleSendMessage} />
    </div>
  )
}

export default Chat
