import React, {useState} from "react";
import {registerUser} from '../api-adapter'


const Register = (props)=> {
    const [password, setPassword]= useState("")
    async function handleSubmit(event){
    // RegisterUser()
        event.preventDefault()
        const username= event.target[0].value
        const password = event.target[1].value
        const registeredUser = await registerUser(username, password)
       
        //check for message or for error.message
        
        const token = registeredUser.token 
        console.log (token)
        localStorage.removeItem('token')
        localStorage.setItem('token',token)
    }
    
    return (
        <div className= "box"
        style={{
            textAlign: 'center',
            color: "red",
            fontSize: "20px",
            
            fontFamily: "ITC Benguiat",
        }}> 
        {/* {`Register`} */}
        <form onSubmit={handleSubmit}>
            <h2>Complete your profile by filling in this account information</h2><hr></hr>
            <label htmlFor="username">Username: </label><br></br>
            <input id='username' type='text' minLength="8" required/><br></br>
            <label htmlFor="password">Password: </label><br></br>
			
            <input id="password" type= "password" minLength="8"/><br></br>
           
            <button type="submit" style={{cursor: "pointer"}}> Submit </button>
            </form>
            </div>
    )
}

{/* <h1 style={{color: "red", fontSize: "50px", fontFamily:'ITC Benguiat'}}>Log In</h1> */}


export default Register;