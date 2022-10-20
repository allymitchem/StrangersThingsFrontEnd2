import React, {useState, useEffect} from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import { logInUser } from '../api-adapter'
import {Login} from './'


const Navbar = ({isLoggedIn, setIsLoggedIn}) =>{
    // const [login, setLogIn]= useState([])
    // useEffect(()=>{
    //     setLogIn(logInUser)
    // }, [])
    return (
        <header>
            <h1 className="Title" >Stranger's Things</h1>
            <span className="headerButtons">
            <NavLink className ="Home"  to= 'posts'>Home</NavLink>
            {isLoggedIn ? ( 
            <NavLink className= "Logout" onClick={()=>{localStorage.removeItem('token') 
            setIsLoggedIn(false)}}>Logout</NavLink> )
         :( 
            <NavLink className= "Login" to='login' >Login</NavLink>
            )} 
            
            <NavLink className= "Posts" to='posts' >Posts</NavLink>
            <NavLink className= "Register" to='register' >Sign Up</NavLink>
            
        </span>

        </header>
        // ,console.log('logInUser')
    )
}

export default Navbar