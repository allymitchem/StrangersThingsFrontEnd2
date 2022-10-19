import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { logInUser } from '../api-adapter'


const Navbar = () =>{
    const [login, setLogIn]= useState([])
    useEffect(()=>{
        setLogIn(logInUser)
    }, [])
    return (
        <header>
            <h1 >Stranger's Things</h1>
            <form
            className= "user"
            //</header>onSubmit={handleSubmit}
            >

            <button className="Home">Home</button>
            <button className="Posts">Posts</button>
            <NavLink className= "login" to={logInUser} >Login</NavLink>
            {/* <button className="Login" >Login</button/users/login>  */}
            {/*Nav bar option buttons*/}


            </form>

        </header>
    )
}

export default Navbar