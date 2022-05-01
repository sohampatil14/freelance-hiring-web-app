import React from "react";
import LeftUpdateSection from "../jobHunter/LeftUpdateSection";
import classes from "../jobHunter/JobHunterUpdate.module.css";
import RightUpdateSection from "./RightUpdateSection";

const RecruiterFirstProfileUpdate = () => {
  return (
    <div className={classes["section-update"]}>
      <div className={classes["update"]}>
        <LeftUpdateSection />
        <RightUpdateSection />
      </div>
    </div>
  );
};

export default RecruiterFirstProfileUpdate;
