import React from "react";


function handleSubmit(event){}
const CreatePosts=()=>{
    return( 
        <div>
        <form onSubmit = {handleSubmit}>
        <h1 style={{color: "red", fontSize: "50px", fontFamily:'ITC Benguiat'}}>Log In</h1>
        <label htmlFor="title">Title: </label><br></br>
        <input id='title' type='text'  required/><br></br>
        <label htmlFor="description">Description: </label><br></br>
        <input id="description" type= "description" /><br></br>
        <label htmlFor="price">Price: </label><br></br>
        <input id="price" type= "price" /><br></br>
        <label htmlFor="willDeliver">Will Deliver: </label><br></br>
        <input id="willDeliver" type= "willDeliver" /><br></br>


        </form>

    <h2>I am returning</h2>
    </div>)
}

export default CreatePosts;