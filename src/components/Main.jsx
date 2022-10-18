import React, {useState, useEffect} from "react";
import {Navbar, Posts, Register} from "./";

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";

const Main =  () =>{
  return (
    <div id="main">
    <div id="navbar">
      <div>Stranger's Things</div>
    </div>
    
    <div id="container">
      {/* <Posts/> */}
      <Register/>
      {/* your components here */}
    </div>
  </div>
  );

}
export default Main;
