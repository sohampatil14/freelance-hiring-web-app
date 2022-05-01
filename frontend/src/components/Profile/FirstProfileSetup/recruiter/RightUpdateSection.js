import React from "react";
import RecruiterAddDetails from "./RecruiterAddDetails";
import classes from "../jobHunter/JobHunterUpdate.module.css";

const RightUpdateSection = () => {
  return (
    <div
      className={classes["section-update-right"]}
      style={{ padding: "0 4rem" }}>
      <div className={classes["profile-update"]}>
        <RecruiterAddDetails />
      </div>
    </div>
  );
};

export default RightUpdateSection;
