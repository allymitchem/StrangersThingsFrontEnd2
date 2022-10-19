import React, {useState, useEffect} from "react";
import {Posts, Register, Navbar} from "./";

import {
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

const Main =  () =>{
  return (
    <div id="main">
      <h2>hello</h2>
      {/* <div>Stranger's Things</div> */}
      <Navbar/>

      <Routes>
        <Route path="register" element={< Register/>} />
        <Route path="posts" element={< Posts/>} />
        <Route path="/" element={< Posts/>} />

      </Routes>

      <Posts/>
      
    
  </div>
  );

}
export default Main;
