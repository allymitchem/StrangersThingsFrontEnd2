import React, {useState} from 'react'
import { redirect, NavLink, useNavigate, Navigate  } from 'react-router-dom'
import Register from './Register'
import { logInUser } from '../api-adapter'
 
const Login = ({isLoggedIn, setIsLoggedIn})=> {
        const navigate = useNavigate()
    async function handleSubmit(event){
    // RegisterUser()
        event.preventDefault()
      
        
    
        const username= event.target[0].value
        const password = event.target[1].value
        const registeredUser = await logInUser(username, password)
    
        setIsLoggedIn(true)
     

        // console.log('user logged in')
        // console.log(registeredUser)
       
        //check for message or for error.message
        
        const token = registeredUser.token 
        // console.log (token)
          localStorage.removeItem('token')
         localStorage.setItem('token',token)

         
        }
        const logOut= () => {
           localStorage.removeItem('token')
           setIsLoggedIn(false)
           console.log ('user logged out')

        }

    return (
        <>
        
    {/* {`Login page`} */}
    <div className= 'logInBox'
    style={{
        color: "red", 
        fontFamily:'ITC Benguiat',
        textAlign: "center"}}> 
    {/* {!isLoggedIn ? ( */}
        {/* <> */}
      {/* need to center log in boxes */}
        <form onSubmit = {handleSubmit}>
            <h1
            style={{
                fontSize: "50px"
            }}>LOG IN</h1>
            <label htmlFor="username" style={{fontSize: "25px"}}>Username: </label><br></br>
            <input id='username' type='text'  required/><br></br>
            <label htmlFor="password" style={{fontSize: "25px"}}>Password: </label><br></br>
            <input id="password" type= "password" /><br></br>
            <button type="submit" style={{cursor: "pointer"}}> Log In </button><br></br>
           
            <NavLink to= "/register">Don't have an account? Sign Up</NavLink>
            </form>

            { isLoggedIn ?
            (
                navigate('/posts')

            )
        : (null)
    }
            {/* </>  */}
    {/* ) : ( */}
        {/* <>
        {/* <h2>log out page</h2> */}
        {/* <button onClick={logOut}>Log Out</button>
        </> */} 
    {/* )} */}
            </div>
     </>
    
    ) }

export default Login