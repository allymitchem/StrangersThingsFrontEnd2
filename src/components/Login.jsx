import React, {useState} from 'react'
import Register from './Register'
 

const Login = () => {
    const [currentUser, setCurrentUser] = useState("")

    async function handleLogin (event){
        event.preventDefault ()

    }
    return (
        <div>
    {/* {`Login page`} */}
    <div className= 'logInBox'> 
      
        <form onSubmit = {handleLogin}>
            <label htmlFor="username">Username: </label> 
            <input id='username' type='text'  required/>
            <label htmlFor="password">Password: </label>
			
            <input id="password" type= "password" />
           
            <button type="submit"> Log In </button>
            </form>
            </div>
    </div>
    )

}


export default Login