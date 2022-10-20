import React from "react";
import { redirect, NavLink } from 'react-router-dom'

const logOut =()=>{
    localStorage.removeItem('token')
    return 
}


export default Logout;