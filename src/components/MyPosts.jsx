import React from "react";
import { Link } from "react-router-dom";

const MyPosts = ({ token, UserPosts }) => {
  return (
  <div className="myMessagesPage">
 
  {UserPosts.map((post) => {

    return (
      <div className="PostBox" key={`post-id-${post._id}`}>
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
          {post.willDeliver ? <b>Will Deliver</b> : <b>Will Not Deliver</b>}
        </div>

        <Link  to={`/posts/${post._id}`}>
          <button className="detailsButton">Post Details</button>
        </Link>
      </div>
      
    );
  })};
  </div> )
};

export default MyPosts;
