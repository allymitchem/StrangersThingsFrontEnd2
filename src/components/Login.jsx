import React, {useState} from 'react'
import { redirect, NavLink } from 'react-router-dom'
import Register from './Register'
import { logInUser } from '../api-adapter'
 
const Login = (props)=> {
    // const [password, setPassword]= useState("")
    async function handleSubmit(event){
    // RegisterUser()
        event.preventDefault()
        const username= event.target[0].value
        const password = event.target[1].value
        const registeredUser = await logInUser(username, password)
        console.log(registeredUser)
       
        //check for message or for error.message
        
        const token = registeredUser.token 
        console.log (token)
        localStorage.removeItem('token')
        localStorage.setItem('token',token)
    }

    return (
        <div>
    {/* {`Login page`} */}
    <div className= 'logInBox'> 
      {/* need to center log in boxes */}
        <form onSubmit = {handleSubmit}>
            <h1 style={{color: "red", fontSize: "50px", fontFamily:'ITC Benguiat'}}>Log In</h1>
            <label htmlFor="username">Username: </label><br></br>
            <input id='username' type='text'  required/><br></br>
            <label htmlFor="password">Password: </label><br></br>
            <input id="password" type= "password" /><br></br>
            <button type="submit"> Log In </button><br></br>
           
            <NavLink to= "/register">Don't have an account? Sign Up</NavLink>
            </form>
            </div>
    </div>
    )

}


export default Login