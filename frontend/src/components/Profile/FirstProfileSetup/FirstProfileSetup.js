import React from "react";
import { useSelector } from "react-redux";
import JobHunterFirstProfileUpdate from "./jobHunter/JobHunterFirstProfileUpdate";
import RecruiterFirstProfileUpdate from "./recruiter/RecruiterFirstProfileUpdate";

const FirstProfileSetup = () => {
  const { user } = useSelector((state) => state.auth);

  if (user.role === "job hunter") {
    return <JobHunterFirstProfileUpdate />;
  } else {
    return <RecruiterFirstProfileUpdate />;
  }
};

export default FirstProfileSetup;
