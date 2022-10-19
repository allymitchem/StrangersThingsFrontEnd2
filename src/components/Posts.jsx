import React, {useState, useEffect} from "react";
import { Navbar } from "./"
import { getPosts } from "../api-adapter";
import './Posts.css'

const Posts = (props) =>{
    const [posts, setAllPosts]= useState([])
    useEffect(()=>{
        async function fetchPosts(){const allPosts= await getPosts()
        setAllPosts(allPosts)} 
        fetchPosts()
    },[])
    return (
        <div>
    {/* // <div>{`Posts`} */}
    {posts.length ? posts.map((post)=> {
        return <div className="PostBox" key ={post._id}> 
                    <div className ="postTitle" >{post.title}</div>
                    <div>{post.description}</div>
                    <div><b>Price: </b>{post.price}</div>
                    <div><b>Location: </b>{post.location}</div>
                    <div><b>Seller: </b>{post.author.username}</div>
                    {/* <div><b>ID: </b>{post._id}</div> */}
                </div>
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