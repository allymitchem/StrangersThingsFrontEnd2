import React, { useEffect, useState } from "react";
import { redirect, NavLink, useNavigate, Navigate } from "react-router-dom";

import { logInUser } from "../api-adapter";
import "./Login.css"

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();

    const username = event.target[0].value;
    const password = event.target[1].value;
    const registeredUser = await logInUser(username, password);

    setIsLoggedIn(true)
    const token = registeredUser.token;

    localStorage.removeItem("token");
    localStorage.setItem("token", token);
  }

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
          <hr/>
          <label htmlFor="username" style={{ fontSize: "25px" }}>
          <span className="material-symbols-outlined">
        person
      </span>USERNAME:{" "}
          </label>
          <br></br>
          <input id="username" type="text" required />
          <br></br>
          <label htmlFor="password" style={{ fontSize: "25px" }}>
          <span className="material-symbols-outlined">
        lock
        </span>PASSWORD:{" "}
          </label>
          <br></br>
          <input id="password" type="password" />
          <br></br>
          <button type="submit" style={{ cursor: "pointer" }}>
            {" "}
            Log In{" "}
          </button>
          <br></br>

          <NavLink className="registerLink" to="/register">Don't have an account? Sign Up</NavLink>
        </form>
        {isLoggedIn ? navigate("/users/me") : null}

      </div>
    </>
  );
};

export default Login;
