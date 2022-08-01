import React from "react";
import Message from "./Message";

function Messages({ messages }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {messages?.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </div>
  );
}

export default Messages;
