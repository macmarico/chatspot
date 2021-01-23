import React, { useState, useEffect } from "react";
import ClubMessages from "./ClubMessages";
import MessageBar from "./MessageBar";

const PrivateChat = ({username, PrivateChatSecondUsername, socket}) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendPrivateMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("privateMessage", username, PrivateChatSecondUsername , message, () => setMessage(""));
    }
  };

  useEffect(() => {
    socket.on("privateMess", (message) => {
      setMessages([...messages, message]);
    });

  }, [messages]);

  console.log(message, messages)
  return (
    <div>
      <ClubMessages messages={messages} username={username}/>
      <MessageBar message={message} setMessage={setMessage} sendMessage={sendPrivateMessage}/>
    </div>
  );
};

export default PrivateChat;
