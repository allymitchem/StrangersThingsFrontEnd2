import React, {useState, useEffect} from "react";
import { getUserProfile } from "../api-adapter";
import {MyPosts, MyMessages} from './'

const UserProfile = ({posts}) => {
 
    const [userInfo, setUserInfo] = useState ({posts:[], messages:[]})
    const token = localStorage.getItem("token");
    
    useEffect (()=>{
        
        async function getUserData() {
            const UserData = await getUserProfile(token)
            
            setUserInfo(UserData)
        } getUserData()
    }, [token])
    const UserPosts=userInfo.posts
    // const UserMessages = userInfo.messages
    // const FromUserName = userInfo.username
    

    return (
        <div>
        <MyPosts  token ={token}  UserPosts ={UserPosts}/>
        <MyMessages  token={token} />
        </div>
    )
}


export default UserProfile