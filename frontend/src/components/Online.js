import React from "react";

const Online = ({ users, setPrivateChat, setPrivateChatSecondUsername, setChats, setOnline, setClub, setNavigation  }) => {
  
  const onlineUserClickHandler = (username) => {
    setPrivateChat(true);
    setChats(false);
    setOnline(false);
    setClub(false);
    setNavigation(false)
    setPrivateChatSecondUsername(username)
  }

  return (
    <div>
      <div id="onlineSec">
        <div className="mystatus"></div>

        {users.map(({username}) => (
          <div key={username} value={username} className="OnlineUsersCont" onClick={() => onlineUserClickHandler(username)}>
            <div className="imageCont">
              <img src="avatar/img.svg" alt="avatar" width="100%"></img>
            </div>
            <div className="statusAndUsername">
              <div className="status">
                frefsfdsfdgfdsgf gg gdfgfdg dfg d dfsgh gerg erg ewrgegergerte
                rttthr er hgs
              </div>
              <div className="username">{username}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Online;
