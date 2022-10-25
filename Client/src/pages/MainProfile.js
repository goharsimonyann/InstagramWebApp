import React from "react";
import Posts from "../components/profile/Posts";
import UserProfile from "../components/profile/UserProfile";

const MainProfile = () => {
  return (
    <>
      <UserProfile />
      <hr />
      <Posts />
    </>
  );
};

export default MainProfile;
