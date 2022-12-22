import React, { useState } from "react";
import { registerUser } from "../api-adapter";
import { useNavigate, NavLink } from "react-router-dom";
import "./Register.css"
const Register = (props) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const registeredUser = await registerUser(username, password);

    const token = registeredUser.token;

    localStorage.removeItem("token");
    localStorage.setItem("token", token);
  }

  return (
    <div
      className="formBox"
      style={{
        textAlign: "center",
        color: "red",
        fontSize: "20px",

        fontFamily: "ITC Benguiat",
      }}
    >
      <form className= "registerForm" onSubmit={handleSubmit}>
        <h2 className="signUp">SIGN UP</h2>
        <hr></hr>
        <label htmlFor="username"><span class="material-symbols-outlined">
        person
      </span>USERNAME: </label>
        <br></br>
        <input id="username" type="text" minLength="8" required />
        <br></br>
        <label htmlFor="password"><span class="material-symbols-outlined">
        lock
        </span>PASSWORD: </label>
        <br></br>

        <input id="password" type="password" minLength="8" />
        <br></br>

        <button type="submit" style={{ cursor: "pointer" }}>
          {" "}
          Submit{" "}
        </button>
      </form>
        <NavLink className="loginLink" to="/login">Already have an account? Log In</NavLink>
    </div>
  );
};

export default Register;
