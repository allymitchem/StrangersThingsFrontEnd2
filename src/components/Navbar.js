import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { logInUser } from '../api-adapter'


const Navbar = () =>{
    const [login, setLogIn]= useState([])
    useEffect(()=>{
        setLogIn()
    })
    return (
        <header>
            <h1 >Stranger's Things</h1>
            <button className="Home">Home</button>
            <button className="Posts">Posts</button>
            <button className="Login" >Login</button> 
            {/*Nav bar option buttons*/}

        </header>
    )
}

export default Navbar