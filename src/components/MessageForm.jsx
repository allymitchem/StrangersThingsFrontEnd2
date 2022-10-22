import React, { useState } from "react";
import { sendMessage } from "../api-adapter";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  

  async function handleMessage(event) {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const content = message

      const newMessage = await sendMessage(token, content);
      console.log(newMessage);
    } catch (error) {
      console.log(error);
    }}

    return (
      <form onSubmit={handleMessage}>
        <label htmlFor="message">
          <b>Reply to seller: </b>{" "}
        </label>
        <input
          type="text"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <input type="submit" value="Send" />
      </form>
    );
  }


export default MessageForm;
