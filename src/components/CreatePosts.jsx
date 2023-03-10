import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPosts } from "../api-adapter";
import "./CreatePosts.css"

const CreatePosts = () => {
  const [confirmationMessage, setConfirmationMessage] = useState("")
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const navigate = useNavigate()
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const newPost = await addPosts(
        token,
        title,
        description,
        price,
        userLocation,
        willDeliver
      );
 if (newPost){
  navigate("/posts")
 }
    } catch (error) {
      console.log(error);
    }
    
  }

  

  return (
    <div  style={{ textAlign: "center" }}>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <h4
          style={{ color: "red", fontSize: "35px", fontFamily: "ITC Benguiat" }}
        >
          CREATE NEW POST
        </h4>
        <label htmlFor="title">Title: </label>
        <br></br>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          required
        />
        <br></br>
        <label htmlFor="description">Description: </label>
        <br></br>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <br></br>
        <label htmlFor="price">Price: </label>
        <br></br>
        <input
          id="price"
          type="text"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <br></br>
        <label htmlFor="location">Location: </label>
        <br></br>
        <input
          id="location"
          type="text"
          value={userLocation}
          onChange={(event) => {
            setUserLocation(event.target.value);
          }}
        />
        <br></br>
        <label htmlFor="willDeliver">Will Deliver: </label>
        <br></br>
        <input
          id="willDeliver"
          type="checkbox"
          checked={willDeliver}
          onChange={(event) => {
            setWillDeliver(event.target.checked);
            
           ;
          }}
        />
        <br></br>
        <button
          style={{ cursor: "pointer" }}
          type="submit"
          value="Create New Post"
        >Create Post</button>
      </form>
    </div>
  );
};

export default CreatePosts;
