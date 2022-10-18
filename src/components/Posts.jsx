import React, {useState, useEffect} from "react";
import { Navbar } from "./"
import { getPosts } from "../api-adapter";

const Posts = (props) =>{
    const [posts, setAllPosts]= useState([])
    useEffect(()=>{
        async function fetchPosts(){const allPosts= await getPosts()
        setAllPosts(allPosts)} 
        fetchPosts()
    },[])
    return (
    <div>{`this is your post component`}
    {posts.length ? posts.map((post)=> {
        return <div> {post.title}</div>
    }) : <div> Loading your posts</div>
    }</div>
    )}
    
//     async function fetchPosts (){
//         try { 
//             const response = await fetch("https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts")
//             const result = await response.json()
//             // console.log(result)
//             const UserPosts = result.data.posts;
//             // console.log(UserPosts)
//         } catch (error){
//             console.log(error)
//         }
//     }
    
// }

export default Posts