import React, {useState} from "react";
import {registerUser} from '../api-adapter'


const Register = (props)=> {
    const [password, setPassword]= useState("")
    async function handleSubmit(event){
    // RegisterUser()
        event.preventDefault()
        const username= event.target[0].value
        const password = event.target[1].value
        const registeredUser = await registerUser(username, password)
       
        //check for message or for error.message
        
        const token = registeredUser.token 
        console.log (token)
        localStorage.removeItem('token')
        localStorage.setItem('token',token)
    }
    
    return (
        <div className= 'box'> 
        {/* {`Register`} */}
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label> 
            <input id='username' type='text' minLength="8" required/>
            <label htmlFor="password">Password: </label>
			
            <input id="password" type= "password" minLength="8"/>
           
            <button type="submit"> Register </button>
            </form>
            </div>
    )
}

export default Register;