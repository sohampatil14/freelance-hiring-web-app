import React from "react";
import { useLocation } from "react-router-dom";
import FirstProfileSetup from "../../../components/Profile/FirstProfileSetup/FirstProfileSetup";
import ProfileUpdate from "../../../components/Profile/ProfileUpdate/ProfileUpdate";

const Profile = () => {
  const { state } = useLocation();

  if (state?.previousRoute === "signup") return <FirstProfileSetup />;
  else return <ProfileUpdate />;
};

export default Profile;
