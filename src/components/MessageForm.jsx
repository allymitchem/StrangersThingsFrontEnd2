import React, { useState } from "react";
import { sendMessage } from "../api-adapter";
import { useParams } from "react-router-dom";

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
          <h4>Reply to seller: </h4>
        </label>
        <input
          type="text"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <input type="submit" value="Send" style={{ cursor: "pointer" }} />
        <br></br>
      </form>
    </div>
  );
};

export default MessageForm;
