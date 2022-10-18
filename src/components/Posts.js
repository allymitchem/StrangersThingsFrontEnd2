import React, {useState} from "react";

const Posts = () =>{
    const [allPosts, setAllPosts]= useState([])
    async function fetchPosts (){
        try { 
            const response = await fetch("https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts")
            const result = await response.json()
            const UserPosts = result.Posts
            console.log(UserPosts)
            setAllPosts(UserPosts)

        } catch (error){
            console.log(error)
        }
    }
    
}

export default Posts