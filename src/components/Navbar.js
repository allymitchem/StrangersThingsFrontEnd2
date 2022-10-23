import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <header>
      <h1 className="Title">Stranger's Things</h1>
      <span className="headerButtons">
        <NavLink className="Home" to="posts">
          Home
        </NavLink>

        {isLoggedIn ? (
          <NavLink
            className="Logout"
            onClick={() => {
              localStorage.removeItem("token");
              setIsLoggedIn(false);
            }}
          >
            Logout
          </NavLink>
        ) : (
          <NavLink className="Login" to="login">
            Login
          </NavLink>
        )}
        {!isLoggedIn ? (
          <NavLink className="Register" to="register">
            Sign Up
          </NavLink>
        ) : null}
        {isLoggedIn ? (
          <NavLink className="CreatePosts" to="post">
            Add New Listing
          </NavLink>
        ) : null}
        {isLoggedIn ? (
          <NavLink className="Profile" to="users/me">
            User Profile
          </NavLink>
        ) : null}
      </span>
    </header>
  );
};

export default Navbar;
