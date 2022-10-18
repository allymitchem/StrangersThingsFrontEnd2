import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import Posts from "./Posts";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";


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
