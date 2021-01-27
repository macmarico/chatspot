import React from "react";
import { Link } from "react-router-dom";

const Chats = ({ Inbox }) => {


  return (
    <div>
      <div id="chatsSec">
        {Inbox.map((user) => (
          <div className="chatsUsernameCont">
            <div className="chatsImgCont">
              <img src="avatar/img.svg" alt="avatar"></img>
            </div>
            <Link className="chatsUsername" to="/chatRoom">
              {user.user}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chats;
