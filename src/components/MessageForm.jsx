import React, { useState } from "react";
import { sendMessage } from "../api-adapter";
import { useParams } from "react-router-dom";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const {id} = useParams()

  async function handleMessage(event) {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const content = message

      const newMessage = await sendMessage(token,id,content);
      console.log(id)
      console.log(newMessage);
    } catch (error) {
      console.log(error);
    }}

    return (
      <form onSubmit={handleMessage}>
        <label htmlFor="message">
          <b>Reply to seller: </b>
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
