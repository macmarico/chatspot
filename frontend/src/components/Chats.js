import React from "react";
import { Link } from "react-router-dom";


const Chats = () => {
  return (
    <div>
      <div id="chatsSec">
        <div className="chatsUsernameCont">
          <div className="chatsImgCont">
            <img src="avatar/img.svg" alt='avatar'></img>
          </div>
         <Link className="chatsUsername" to='/chatRoom'>manish</Link>
        </div>

        <div className="chatsUsernameCont">
          <div className="chatsImgCont">
            <img src="avatar/img.svg" alt='avatar'></img>
          </div>
         <Link className="chatsUsername" to='/chatRoom'>andi</Link>
        </div>

        <div className="chatsUsernameCont">
          <div className="chatsImgCont">
            <img src="avatar/img.svg" alt='avatar'></img>
          </div>
         <Link className="chatsUsername" to='/chatRoom'>jarvis</Link>
        </div>

        <div className="chatsUsernameCont">
          <div className="chatsImgCont">
            <img src="avatar/img.svg" alt='avatar'></img>
          </div>
         <Link className="chatsUsername" to='/chatRoom'>bratt</Link>
        </div>
      </div>
    </div>
  );
};

export default Chats;
