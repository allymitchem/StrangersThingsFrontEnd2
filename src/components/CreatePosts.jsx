import React from "react";
import { addPosts } from "../api-adapter";
import { NavLink } from "react-router-dom";


// function handleSubmit(event){}
const CreatePosts = () => {
  return (
    <div>
      <form onSubmit={addPosts}>
        <h4
          style={{ color: "red", fontSize: "35px", fontFamily: "ITC Benguiat" }}
        >
          Add New Listing
        </h4>
        <label htmlFor="title">Title: </label>
        <br></br>
        <input id="title" type="text" required />
        <br></br>
        <label htmlFor="description">Description: </label>
        <br></br>
        <input id="description" type="text" />
        <br></br>
        <label htmlFor="price">Price: </label>
        <br></br>
        <input id="price" type="text" />
        <br></br>
        <label htmlFor="location">Location: </label>
        <br></br>
        <input id="location" type="text" />
        <br></br>
        <label htmlFor="willDeliver">Will Deliver: </label>
        <br></br>
        <input id="willDeliver" type="checkbox" value={true} />
        <br></br>
        <input type="submit" value="Create New Post" />
      </form>
    </div>
  );
};

export default CreatePosts;
