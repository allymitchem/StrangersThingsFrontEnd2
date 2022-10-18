import React from "react";
import {registerUser} from '../api-adapter'
const Register = (props)=> {
    async function handleSubmit(event){
    // RegisterUser()
        event.preventDefault()
        const username= event.target[0].value
        const password = event.target[1].value
        const registeredUser = await registerUser(username, password)
        //check for message or for error.message
        // console.log(username, password)
        const token = registeredUser.token
        console.log (token)
        localStorage.removeItem('token')
        localStorage.setItem('token',token)
    }
    //
    return (
        <div className= 'box'> 
        {`This is your Register Component`}
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label> 
            <input id='username' type='text' required/>
            <label htmlFor="password">Password: </label>
            <input id="password" type= "password"/>
            <button type="submit"> Submit </button>
            </form>
            </div>
    )
}

export default Register;