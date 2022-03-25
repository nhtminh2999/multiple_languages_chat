import React, { useRef } from 'react';

function ChatForm(props) {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.message
    if (!value) return;
    props.onSendMessage(e.target.message.value);
    inputRef.current.value = '';
  }
  return (
    <div className="chat-form-container">
      <form onSubmit={handleSubmit} id="chat-form">
        <input
          ref={inputRef}
          name='message'
          id="msg"
          type="text"
          placeholder="Enter Message"
          required
          autoComplete="off"
        />
        <button type='submit' className="btn"><i className="fas fa-paper-plane"></i> Send</button>
      </form>
    </div>
  )
}

export default ChatForm
