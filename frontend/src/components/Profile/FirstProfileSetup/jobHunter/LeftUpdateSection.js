import React from "react";
import updateImage from "../../../../assets/talent-profile.webp";
import classes from "./JobHunterUpdate.module.css";

const LeftUpdateSection = () => {
  return (
    <div className={classes["section-update-left"]}>
      <div className={classes["section-info"]}>
        <h1>Let's get your profile ready for offers.</h1>
        <p>
          Remember, advertise best version of your work with clarity in vision.
          So that others find it easy to approach you. Vague words and numbers
          makes you unapproachable.
        </p>
      </div>
      <div className={classes["image-container"]}>
        <img src={updateImage} alt='' />
      </div>
    </div>
  );
};

export default LeftUpdateSection;
