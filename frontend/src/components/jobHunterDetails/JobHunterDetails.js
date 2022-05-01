import React from "react";
import { useSelector } from "react-redux";
import JobHunterAvailableLocations from "./JobHunterAvailableLocations";
import JobHunterAvailablilty from "./JobHunterAvailablilty";
import JobHunterCertificates from "./JobHunterCertificates";
import classes from "./jobHunterDetails.module.css";
import JobHunterDetailsHeader from "./JobHunterDetailsHeader";
import JobHunterProjects from "./JobHunterProjects";
import JobHunterSkills from "./JobHunterSkills";
import JobHunterWorkExp from "./JobHunterWorkExp";

const JobHunterDetails = () => {
  const { singleUser } = useSelector((state) => state.jobHunters);

  return (
    <section className={classes["user-proile-section"]}>
      <JobHunterDetailsHeader user={singleUser} />
      <JobHunterSkills user={singleUser} />
      <JobHunterProjects user={singleUser} />
      <JobHunterCertificates user={singleUser} />
      <JobHunterWorkExp user={singleUser} />
      <JobHunterAvailableLocations user={singleUser} />
      <JobHunterAvailablilty user={singleUser} />

      {/* 
      This component is yet to complete (Projects) <JobHunterProjects user={singleUser} />
      Backend mai getUser mai projects bhi send karo
       */}
    </section>
  );
};

export default JobHunterDetails;
