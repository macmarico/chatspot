import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import Club from "../components/Club";
import Online from "../components/Online";
import Chats from "../components/Chats";
import PrivateChat from "../components/PrivateChat";

let socket;

const Home = ({ location }) => {
  const [club, setClub] = useState(true);
  const [online, setOnline] = useState(false);
  const [chats, setChats] = useState(false);
  const [privateChat, setPrivateChat] = useState(false);
  const [PrivateChatSecondUsername, setPrivateChatSecondUsername] = useState(
    ""
  );
  const [navigation, setNavigation] = useState(true);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [Inbox, setInbox] = useState([]);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { username, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setUsername(username);
    setRoom(room);

    socket.emit("join", { username, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("privateMess", async (message) => {
      let oldMessages = await JSON.parse(localStorage.getItem(message.privateRoom));

      await localStorage.setItem(
        message.privateRoom,
        JSON.stringify(
          oldMessages ? [...oldMessages, message.chatData] : [message.chatData]
        )
      );
      if (PrivateChatSecondUsername !== message.chatData.username) {
        setInbox([...Inbox, message.chatData]);
      }
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [messages, Inbox]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div>
      <Header username={username} />
      {navigation ? (
        <NavigationBar
          setClub={setClub}
          setOnline={setOnline}
          setChats={setChats}
        />
      ) : (
        ""
      )}
      {club ? (
        <Club
          message={message}
          messages={messages}
          username={username}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      ) : (
        ""
      )}
      {online ? (
        <Online
          users={users}
          setPrivateChat={setPrivateChat}
          setOnline={setOnline}
          setChats={setChats}
          setClub={setClub}
          setNavigation={setNavigation}
          setPrivateChatSecondUsername={setPrivateChatSecondUsername}
        />
      ) : (
        ""
      )}
      {chats ? <Chats Inbox={Inbox} /> : ""}
      {privateChat ? (
        <PrivateChat
          username={username}
          setPrivateChatSecondUsername={setPrivateChatSecondUsername}
          PrivateChatSecondUsername={PrivateChatSecondUsername}
          socket={socket}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
