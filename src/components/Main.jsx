import React, {useState, useEffect} from "react";
import {Posts, Register, Navbar, Login, CreatePosts, PostDetails, MessageForm} from "./";

import {
  Route,
  Routes,
  Redirect,
  Link
} from "react-router-dom";
import { getPosts } from "../api-adapter";

const Main =  () =>{
  const [isLoggedIn, setIsLoggedIn]= useState('')
  const [posts, setAllPosts]=useState([])
  // const [isToken, setIsToken] =useState (null)
  useEffect(()=>{
   const token = localStorage.getItem('token')
  //  setIsToken(token)
   if (token) {
    setIsLoggedIn(true)
   }

  },[]) 

  useEffect(()=>{
    async function fetchPosts() {
      const allPosts = await getPosts(localStorage.getItem('token'))
      setAllPosts(allPosts)
    }
    fetchPosts()
  }, [])
  function filterPosts(postId){
    
    return posts.filter((post)=>{
     
      
      return post._id == postId
    })
  }
  return (
    <div id="main">
   
      {/* <div>Stranger's Things</div> */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        
        <Route path="register" element={< Register/>} />
        <Route path="login"  element ={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> }/>
        {/* <Route path="logout" element= {<Logout/>}/> */}
        <Route path="posts" element={< Posts />} />
        <Route path="posts/:id" element={<PostDetails filterPosts={filterPosts}/>}/>
        {/* <Route path="posts/:id/messages" element ={<MessageForm/>}/> */}
        <Route path="post" element={<CreatePosts/>}/>
        <Route path="/" element={< Posts/>} />
        

      </Routes>

      {/* <Posts/> */}
      
    
  </div>
  );

}
export default Main;
