import React, { useState, useEffect } from "react";
import { getUserProfile } from "../api-adapter";
import { MyPosts, MyMessages } from "./";
import "./UserProfile.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
      <Tabs>
        <TabList>
          <Tab className="tab">My Posts</Tab>
          <Tab className="tab">Messages</Tab>
        </TabList>
        <TabPanel className="tabPanel">
          <MyPosts token={token} UserPosts={UserPosts} />
        </TabPanel>
        <TabPanel className="tabPanel">
          <MyMessages UserMessages={UserMessages} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default UserProfile;
