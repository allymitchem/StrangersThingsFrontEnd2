import React, { useState, useEffect } from "react";
import { getUserProfile } from "../api-adapter";
import { MyPosts, MyMessages } from "./";
import "./UserProfile.css";

const UserProfile = ({ posts }) => {
  const [userInfo, setUserInfo] = useState({ posts: [], messages: [] });
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getUserData() {
      const UserData = await getUserProfile(token);

      setUserInfo(UserData);
    }
    getUserData();
  }, [token]);
  const UserPosts = userInfo.posts;
  const UserMessages = userInfo.messages;

  return (
    <div className="UserDisplay">
      <MyPosts token={token} UserPosts={UserPosts} />
      <MyMessages UserMessages={UserMessages} />
    </div>
  );
};

export default UserProfile;
