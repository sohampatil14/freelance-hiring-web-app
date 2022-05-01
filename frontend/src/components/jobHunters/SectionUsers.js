import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import ProjectsSkeletion from "../project/ProjectsSkeletion";
import FilterSection from "./FilterSection";
import JobHunter from "./JobHunter";
import classes from "./Users.module.css";

const SectionUsers = () => {
  const { users, isLoading } = useSelector((state) => state.jobHunters);

  return (
    <ChakraProvider>
      <section className={classes["section-users"]}>
        <FilterSection />
        <div className={classes["users"]}>
          {isLoading ? (
            <ProjectsSkeletion />
          ) : users.length === 0 ? (
            <p className='not-found'>Couldn't find any users.</p>
          ) : (
            users.map((user) => <JobHunter key={user._id} user={user} />)
          )}
        </div>
      </section>
    </ChakraProvider>
  );
};

export default SectionUsers;
