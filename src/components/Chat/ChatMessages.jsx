import React from 'react';

function ChatMessage(props) {
  return (
    <>
      <div className="chat-messages">
        {props.messages.map((message, index) => (
          <div key={index} className={`message ${message.name === props.user.name ? 'right' : ''}`}>
            <p className="meta">
              {message.name === props.user.name ? 'You' : message.name} <span>{message.time}</span>
            </p>
            <p className="text">{message.text}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default ChatMessage
