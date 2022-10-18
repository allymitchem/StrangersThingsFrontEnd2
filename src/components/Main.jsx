import React, {useState} from "react";
import Navbar from "./Navbar";
import Posts from "./Posts";

const Main = () => {
//   const Posts = () =>{
//     const [allPosts, setAllPosts]= useState([])
//     async function fetchPosts (){
//         try { 
//             const response = await fetch("https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts")
//             const result = await response.json()
//             const UserPosts = result.data.Posts
//             console.log(UserPosts)
//             setAllPosts(UserPosts)

//         } catch (error){
//             console.log(error)
//         }
//     }
    
// }
  return (
    <div id="main">
    <div id="navbar">
      <div>Stranger's Things</div>
    </div>
    
    <div id="container">
      <Posts/>
      {/* your components here */}
    </div>
  </div>
  );
};

export default Main;
