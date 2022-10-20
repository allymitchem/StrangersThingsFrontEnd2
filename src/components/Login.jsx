import React, {useState} from 'react'
import { redirect } from 'react-router-dom'
import Register from './Register'
 

const Login = () => {
    const [currentUser, setCurrentUser] = useState("")

    async function handleLogin (event){
        event.preventDefault ()

    }
    return (
        <div>
    {/* {`Login page`} */}
    <div className= 'logInBox'> 
      {/* need to center log in boxes */}
        <form onSubmit = {handleLogin}>
            <h1 style={{color: "red", fontSize: "50px", fontFamily:'ITC Benguiat'}}>Log In</h1>
            <label htmlFor="username">Username: </label><br></br>
            <input id='username' type='text'  required/><br></br>
            <label htmlFor="password">Password: </label><br></br>
            <input id="password" type= "password" /><br></br>
            <button type="submit"> Log In </button><br></br>
           
            <button style={{textDecoration: "underline", cursor: "pointer"}}type="submit"> Don't have an account? Sign Up </button> 
            {/*need to get rid of borders around button*/}
            </form>
            </div>
    </div>
    )

}


export default Login