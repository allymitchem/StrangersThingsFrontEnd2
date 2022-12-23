import React from "react";
import "./MyMessages.css";

const MyMessages = ({ UserMessages }) => {
  return (
    <div className="myMessagesPage">
      
      {UserMessages.map((message, index) => {
        return (
          <div className="MessageDisplay" key={`message_${index}`}>
            <p>
              <b>Post: </b>
              {message.post.title}
            </p>
            <p>
              <b>From: </b>
              {message.fromUser.username}
            </p>
            <p>
              <b>Message: </b>
              {message.content}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MyMessages;
