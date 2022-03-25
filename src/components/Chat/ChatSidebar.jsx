import React from 'react'

function ChatSidebar(props) {
  return (
    <div className="chat-sidebar">
      <h3><i className="fas fa-comments"></i>Room Name: {props.roomName}</h3>
      <h2 id="room-name">{props.user}</h2>
      <h3><i className="fas fa-users"></i>Users</h3>
      <ul id="users">
        {props.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ChatSidebar;

