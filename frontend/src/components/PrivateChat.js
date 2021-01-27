import React, { useState, useEffect } from "react";
import ClubMessages from "./ClubMessages";
import MessageBar from "./MessageBar";

const PrivateChat = ({
  username,
  PrivateChatSecondUsername,
  setPrivateChatSecondUsername,
  socket,
}) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendPrivateMessage = (event) => {
    event.preventDefault();
    if (message) {
      let privateChatRoomId = `${username}&${PrivateChatSecondUsername}`;
      socket.emit(
        "privateMessage",
        username,
        PrivateChatSecondUsername,
        message,
        privateChatRoomId,
        () => setMessage("")
      );
    }
  };

  useEffect(async () => {
    socket.on("privateMess", (message) => {
      setMessages([...messages, message.chatData]);
    });

    let privateMessages = await JSON.parse(
      localStorage.getItem(`${username}&${PrivateChatSecondUsername}`)
    );
    privateMessages ? setMessages(privateMessages) : setMessages('');
  }, []);

  console.log(message, messages);
  return (
    <div>
      <ClubMessages messages={messages} username={username} />
      <MessageBar
        message={message}
        setMessage={setMessage}
        sendMessage={sendPrivateMessage}
      />
    </div>
  );
};

export default PrivateChat;
