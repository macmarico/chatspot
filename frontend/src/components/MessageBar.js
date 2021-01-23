import React from "react";

const messageBar = ({ message, setMessage, sendMessage }) => {
  return (
    <form>
      <div className="messagesBar">
        <div style={{ flexBasis: "70%" }}>
          <input
            id="message"
            style={{ width: "100%" }}
            name="massage"
            type="text"
            value={message}
            placeholder="Type message..."
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}

          ></input>
        </div>
        <svg
          style={{ margin: "auto", width: "1.5em", height: "1.5em" }}
          viewBox="0 0 17 16"
          class="bi bi-image-fill"
          fill="grey"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15.002 9.5V13a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-1zm5-6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
        <svg
          style={{ margin: "auto", width: "1.5em", height: "1.5em" }}
          viewBox="0 0 16 16"
          class="bi bi-emoji-laughing"
          fill="grey"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fill-rule="evenodd"
            d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5z"
          />
          <path d="M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
        </svg>
          <svg
            onClick={(event) => sendMessage(event)}
            style={{ margin: "auto", width: "2.5em", height: "2.5em" }}
            viewBox="0 0 16 16"
            class="bi bi-arrow-right-circle-fill"
            fill="#f43e2e"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"
            />
          </svg> 
      </div>
    </form>
  );
};

export default messageBar;
