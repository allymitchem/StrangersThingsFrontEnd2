import React, {useState, useEffect} from "react";
import {Navbar, Posts, Register} from "./";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const Main =  () =>{
  return (
    <Router>
    <div id="main">
      <Navbar/>
      {/* <div>Stranger's Things</div> */}
    
      {/* <Posts/>
      <Register/> */}
      
    
  </div>
  </Router>
  );

}
export default Main;
