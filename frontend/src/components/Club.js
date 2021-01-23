import React from 'react'
import ClubMessages from "../components/ClubMessages";
import MessageBar from "../components/MessageBar";

const Club = ( {username, message, messages, setMessage, sendMessage }) => {
  return (
    <div>
       <ClubMessages messages={messages} username={username}/>
       <MessageBar message={message} setMessage={setMessage} sendMessage={sendMessage}/>
    </div>
  )
}

export default Club
