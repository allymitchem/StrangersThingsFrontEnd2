import React, {useState, useEffect} from "react";
import {Posts, Register, Navbar, Login, CreatePosts} from "./";

import {
  Route,
  Routes,
  Redirect,
  Link
} from "react-router-dom";

const Main =  () =>{
  const [isLoggedIn, setIsLoggedIn]= useState('')
  // const [isToken, setIsToken] =useState (null)
  useEffect(()=>{
   const token = localStorage.getItem('token')
  //  setIsToken(token)
   if (token) {
    setIsLoggedIn(true)
   }

  },[]) 
  return (
    <div id="main">
   
      {/* <div>Stranger's Things</div> */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        
        <Route path="register" element={< Register/>} />
        <Route path="login"  element ={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> }/>
        {/* <Route path="logout" element= {<Logout/>}/> */}
        <Route path="posts" element={< Posts />} />
        <Route path="post" element={<CreatePosts/>}/>
        <Route path="/" element={< Posts/>} />

      </Routes>

      {/* <Posts/> */}
      
    
  </div>
  );

}
export default Main;
