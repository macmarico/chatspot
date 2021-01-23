import React from "react";
import ReactEmoji from 'react-emoji'; 

const Message = ({ message: { user, text }, username }) => {
  let isSentByCurrentUser = false;
  console.log(username)
  const trimmedName = username.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div class="myMessageCont">
      <div class="myMessage">{ReactEmoji.emojify(text)} </div>
    </div>
  ) : (
    <div className="friendMessageCont">
      <div className="friendMessage">{ReactEmoji.emojify(text)} </div>
      <div className="profilePic">
        <img src="avatar/img.svg" width="100%"></img>
      </div>
    </div>
  );
};

export default Message;
