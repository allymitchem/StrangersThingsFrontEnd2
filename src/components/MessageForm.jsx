// import React, { useState } from "react";
// import { sendMessage } from "../api-adapter";

// const MessageForm = () => {
//   const [message, setMessage] = useState("");

//   async function handleSubmit(event) {
//     event.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       const newMessage = await sendMessage(token, id, content);
//       console.log(newMessage);
//     } catch (error) {
//       console.log(error);
//     }

//     return (
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="message">
//           Please enter your message to the seller here:{" "}
//         </label>
//         <input
//           type="text"
//           value={message}
//           onChange={(event) => {
//             setMessage(event.target.value);
//           }}
//         />
//         <input type="submit" value="Send" />
//       </form>
//     );
//   }
// };

// export default MessageForm;
