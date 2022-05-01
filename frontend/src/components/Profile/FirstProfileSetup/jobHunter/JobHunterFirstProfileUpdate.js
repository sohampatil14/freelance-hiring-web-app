import React from "react";
import LeftUpdateSection from "./LeftUpdateSection";
import classes from "./JobHunterUpdate.module.css";
import RightUpdateSection from "./RightUpdateSection";

const JobHunterFirstProfileUpdate = () => {
  return (
    <div className={classes["section-update"]}>
      <div className={classes["update"]}>
        <LeftUpdateSection />
        <RightUpdateSection />
      </div>
    </div>
  );
};

export default JobHunterFirstProfileUpdate;
