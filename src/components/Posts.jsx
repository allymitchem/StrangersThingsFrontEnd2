import React, { useState, useEffect } from "react";
import { Navbar } from "./";
import { getPosts, addPosts } from "../api-adapter";
import { CreatePosts, PostSearch } from "./";
import "./Posts.css";
import { Link, NavLink} from "react-router-dom";

const Posts = (props) => {
  const [posts, setAllPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getPosts();
      setAllPosts(allPosts);
    }
    fetchPosts();
  }, []);  
  return (
    <div>
          <PostSearch/>
      {posts.length ? (
        posts.map((post) => {
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
              <Link to = {`/posts/${post._id}`}><button style={{cursor: "pointer"}}>Post Details</button></Link>

              {/* <div><b>ID: </b>{post._id}</div> */}
            </div>
          );
        })
      ) : (
        <div> Loading your posts</div>
      )}
    </div>
  );
};


//     async function fetchPosts (){
//         try {
//             const response = await fetch("https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts")
//             const result = await response.json()
//             // console.log(result)
//             const UserPosts = result.data.posts;
//             // console.log(UserPosts)
//         } catch (error){
//             console.log(error)
//         }
//     }

// }

export default Posts;
