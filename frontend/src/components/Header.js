import React from "react";

const Header = (props) => {
  return (
    <div className="headerBar">
      <div style={{ flexBasis: "30px", margin: "auto 5px auto 15px" }}>
        <img
          src="avatar/img.svg"
          alt="avatar"
          style={{ borderRadius: "100%", width: "100%" }}
        ></img>
      </div>
      <div>{props.username}</div>
      <div style={{marginLeft:"auto", marginRight:"10px"}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
      </div>
    </div>
  );
};

export default Header;
