import React from "react";
import Message from "./Message";

function Messages({ messages }) {
  return (
    <div>
      {messages?.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </div>
  );
}

export default Messages;
