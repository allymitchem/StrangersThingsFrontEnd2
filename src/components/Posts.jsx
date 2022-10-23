import React, { useState, useEffect } from "react";
import { Navbar } from "./";
import { getPosts, addPosts } from "../api-adapter";
import { CreatePosts, PostSearch } from "./";
import "./Posts.css";
import { Link, NavLink} from "react-router-dom";

const Posts = (props) => {
  const [posts, setAllPosts] = useState([]);
  const [searchTerm, setSearchTerm]= useState('');


  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getPosts();
      setAllPosts(allPosts);
    }
    fetchPosts();
  }, []);  

  function postMatches (post,text){
    
    return (
      post.title.toLowerCase().includes(text) || 
      post.description.toLowerCase().includes(text)
    )

  }
  const filteredPosts= posts.filter(post => postMatches(post, searchTerm))
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;
  
  return (
    <div>
         
         <div className="SearchBar">
             <p className="titleText">Search Posts: </p>
            <span className="Search">
             <input type="text"
            className="searchBar"
          
            value={searchTerm}

            onChange={ (event) => {
             setSearchTerm(event.target.value)
              console.log('im working')
              console.log(event.target.value)
            } 
          }
            />
             </span>
             </div>
      
        
      {posts.length ? (
        postsToDisplay.map((post) => {
          return (
            <div className="PostBox" key={`post-id-${post._id}`} >
              <div className="postTitle">{post.title}</div>
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
              <Link to = {`/posts/${post._id}`}><button >Post Details</button></Link>

              
            </div>
          );
        })
      ) : (
        <div> Loading your posts</div>
      )}
    </div>
  );
};




export default Posts;
