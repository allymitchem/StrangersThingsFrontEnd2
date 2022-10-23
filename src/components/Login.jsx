import React, { useEffect, useState } from "react";
import { redirect, NavLink, useNavigate, Navigate } from "react-router-dom";
import Register from "./Register";
import { logInUser } from "../api-adapter";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    // RegisterUser()
    event.preventDefault();

    const username = event.target[0].value;
    const password = event.target[1].value;
    const registeredUser = await logInUser(username, password);

    setIsLoggedIn(true);

    const token = registeredUser.token;

    localStorage.removeItem("token");
    localStorage.setItem("token", token);
  }
//   const logOut= () => {
//     localStorage.removeItem('token')
//     setIsLoggedIn(false)
//     console.log ('user logged out')

//  }

  return (
    <>
      <div
        className="logInBox"
        style={{
          color: "red",
          fontFamily: "ITC Benguiat",
          textAlign: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h1
            style={{
              fontSize: "50px",
            }}
          >
            LOG IN
          </h1>
          <label htmlFor="username" style={{ fontSize: "25px" }}>
            Username:{" "}
          </label>
          <br></br>
          <input id="username" type="text" required />
          <br></br>
          <label htmlFor="password" style={{ fontSize: "25px" }}>
            Password:{" "}
          </label>
          <br></br>
          <input id="password" type="password" />
          <br></br>
          <button type="submit" style={{ cursor: "pointer" }}>
            {" "}
            Log In{" "}
          </button>
          <br></br>

          <NavLink to="/register">Don't have an account? Sign Up</NavLink>
        </form>

        {isLoggedIn ? navigate("/users/me") : null}
      </div>
    </>
  );
};

export default Login;
