import React from "react";
import {Link} from 'react-router-dom';

const NavigationBar = ({ setClub, setOnline, setChats}) => {
  const handleClubClick = () => {
    setClub(true);
    setOnline(false); 
    setChats(false);
  }
  const handleOnlineClick = () => {
    setClub(false);
    setOnline(true); 
    setChats(false);
  }
  const handleChatsClick = () => {
    setClub(false);
    setOnline(false); 
    setChats(true);
  }
  return (
    <div class="navBar">
      <a onClick={handleClubClick}>CLUB</a>
      <a onClick={handleOnlineClick}>ONLINE</a>
      <a onClick={handleChatsClick}>CHATS</a>
    </div>
  );
};

export default NavigationBar;
