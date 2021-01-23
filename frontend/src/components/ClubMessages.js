import React from "react";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";

const ClubMessages = ({ messages, username }) => {
  return (
    <div className="messagesSec">
      <ScrollToBottom>
        {messages.map((message, i) => (
          <div key={i}>
            <Message message={message} username={username} />
          </div>
        ))}
      </ScrollToBottom>
    </div>
  );
};

export default ClubMessages;
