import React, { useState, useEffect } from "react";

import { getPosts, addPosts } from "../api-adapter";

import "./Posts.css";
import { Link, NavLink } from "react-router-dom";

const Posts = (props) => {
  const [posts, setAllPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getPosts();
      setAllPosts(allPosts);
    }
    fetchPosts();
  }, []);

  function postMatches(post, text) {
    return (
      post.title.toLowerCase().includes(text) ||
      post.description.toLowerCase().includes(text) ||
      post.location.toLowerCase().includes(text) ||
      post.author.username.toLowerCase().includes(text)
    );
  }
  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  return (
    <div className="postsPage">
      <div className="SearchBar">
        <p className="titleText">Search Posts: </p>
        <span className="Search">
          <span id= "magnifyingGlass" class="material-symbols-outlined">
          search
        </span>
          <input
            type="text"
            className="searchBar"
            placeholder="Search..."
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </span>
      </div>
            <div className="postList">
      {posts.length ? (
        postsToDisplay.map((post) => {
          return (
            <div className="PostBox" key={`post-id-${post._id}`}>
              <div className="postTitle">
                <img className="mfIcon" src="mf.png" alt="mf icon"/>
                {post.title}
              </div>
              {/* <hr/> */}
              <div>{post.description}</div>
              <div>
                <b>Price: </b>
                {post.price}
              </div>
              <div>
                <b>Location: </b>
                {post.location}
              </div>
              <div>
                {post.willDeliver ? (
                  <b>Will Deliver</b>
                ) : (
                  <b>Will Not Deliver</b>
                )}
              </div>
              <div>
                <b>Seller: </b>
                {post.author.username}
              </div>
              <Link to={`/posts/${post._id}`}>
                <button class="detailsButton">Post Details</button>
              </Link>
            </div>
          );
        })
      ) : (
        <div class="loadingPosts"> LOADING YOUR POSTS...</div>
      )}
      </div>
    </div>
  );
};

export default Posts;
