import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { logInUser } from '../api-adapter'


const Navbar = () =>{
    // const [login, setLogIn]= useState([])
    // useEffect(()=>{
    //     setLogIn(logInUser)
    // }, [])
    return (
        <header>
            <h1 >Stranger's Things</h1>

            <NavLink className= "login" to='login' >Login</NavLink>
            <NavLink className= "posts" to='posts' >Post</NavLink>
            <NavLink className= "register" to='register' >Register</NavLink>


        </header>
        // ,console.log('logInUser')
    )
}

export default Navbar