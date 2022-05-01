import React from "react";
import classes from "./jobHunterDetails.module.css";

const JobHunterAvailableLocations = ({ user }) => {
  return (
    <>
      <div className={classes["user-profile-details"]}>
        <span></span>
        <p>Availability and Location</p>
        <span></span>
      </div>

      <div className={classes["user-prefered-locations"]}>
        <h1>Preferred Locations</h1>
        {user?.preferredLocations?.length > 0 ? (
          <div className={classes["user-locations"]}>
            {user.preferredLocations.map((el, i) => {
              return (
                <div className={classes["projects-section-info"]} key={i}>
                  {el}
                </div>
              );
            })}
          </div>
        ) : (
          <p>I am ready to relocate anywhere in India.</p>
        )}
      </div>
    </>
  );
};

export default JobHunterAvailableLocations;
