import React from "react";
import classes from "./JobHunterUpdate.module.css";
import UpdateFormStepper from "./UpdateFormStepper";

const RightUpdateSection = () => {
  return (
    <div className={classes["section-update-right"]}>
      <div className={classes["profile-update"]}>
        <UpdateFormStepper />
      </div>
    </div>
  );
};

export default RightUpdateSection;
