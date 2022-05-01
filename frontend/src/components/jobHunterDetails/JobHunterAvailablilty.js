import React from "react";
import classes from "./jobHunterDetails.module.css";

const JobHunterAvailablilty = ({ user }) => {
  return (
    <>
      <div className={classes["user-profile-details"]}>
        <span></span>
        <p>Availability and Location</p>
        <span></span>
      </div>

      <div className={classes["user-prefered-locations"]}>
        {user?.availability?.length > 0 ? (
          <div className={classes["user-locations"]}>
            {user.availability.map((el, i) => {
              return (
                <div className={classes["user-location"]} key={i}>
                  {el}
                </div>
              );
            })}
          </div>
        ) : (
          <p className={classes["projects-section-info"]}>
            I am open for all kind of positions.
          </p>
        )}
      </div>
    </>
  );
};

export default JobHunterAvailablilty;
