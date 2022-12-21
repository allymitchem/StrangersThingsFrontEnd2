import React, { useState } from "react";
import { sendMessage } from "../api-adapter";
import { useParams } from "react-router-dom";
import "./MessageForm.css"

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const { id } = useParams();

  async function handleMessage(event) {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const content = message;

      const newMessage = await sendMessage(token, id, content);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleMessage}>
        <label htmlFor="message">
          <h4>Message seller: </h4>
        </label>
        <span className="formButton">
        <input
          type="text"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <input className="sendButton" type="submit" value="SEND" style={{ cursor: "pointer" }} />
        </span>
      </form>
    </div>
  );
};

export default MessageForm;
