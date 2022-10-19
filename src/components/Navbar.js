import React from 'react'
import './Navbar.css'
const Navbar = () =>{
    return (
        <header>
            <h1 >Stranger's Things</h1>
            <button className="Home">Home</button>
            <button className="Posts">Posts</button>
            <button className="Login">Login</button> 
            {/*Nav bar option buttons*/}

        </header>
    )
}

export default Navbar