import React, {useState, useEffect} from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import { logInUser } from '../api-adapter'
import {Login} from './'
import {PostSearch} from './'


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
            {/* <NavLink className= "Posts" to='posts' >Posts</NavLink> */}
            {isLoggedIn ? ( 
            <NavLink className= "Logout" onClick={()=>{localStorage.removeItem('token') 
            setIsLoggedIn(false)}}>Logout</NavLink> )
         :( 
            <NavLink className= "Login" to='login' >Login</NavLink>
            )} 
            {!isLoggedIn ? (
            <NavLink className= "Register" to='register' >Sign Up</NavLink>)
            : null}
            {isLoggedIn ? (
            <NavLink className ="CreatePosts" to='post'>Add New Listing</NavLink> )
            :(null)}
            {isLoggedIn ? (
                <NavLink className="Profile" to='users/me'>User Profile</NavLink>)
                :(null)}
            
            
            
        </span>

        </header>
        // ,console.log('logInUser')
    )
}

export default Navbar