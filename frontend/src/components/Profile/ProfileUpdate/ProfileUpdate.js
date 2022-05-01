import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import JobHunterProfile from "./jobHunter/JobHunterProfile";
import RecruiterProfile from "./recruiter/RecruiterProfile";

const ProfileUpdate = () => {
  const { user } = useSelector((state) => state.auth);

  if (user.role === "job hunter") {
    return (
      <ChakraProvider>
        <JobHunterProfile />
      </ChakraProvider>
    );
  } else {
    return (
      <ChakraProvider>
        <RecruiterProfile />
      </ChakraProvider>
    );
  }
};

export default ProfileUpdate;
