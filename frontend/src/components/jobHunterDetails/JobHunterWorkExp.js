import React from "react";
import classes from "./jobHunterDetails.module.css";

const JobHunterWorkExp = ({ user }) => {
  return (
    <>
      <div className={classes["user-profile-details"]}>
        <span></span>
        <p>Work Experience</p>
        <span></span>
      </div>

      {user?.experience?.length > 0 ? (
        <div className={classes["experience-cards"]}>
          {user?.experience?.map((el, index) => {
            return (
              <div
                className={classes["experience-card"]}
                style={{
                  width: "500px",
                  margin: "0 auto",
                  border: "1px solid #ccc",
                }}
                key={index}>
                <div className={classes["main-content"]}>
                  <div className={classes["left-part"]}>
                    <p className={classes["work-position"]}>{el?.jobRole}</p>
                    <p className={classes["work-company"]}>{el?.companyName}</p>
                    <p className={classes["work-description"]}>
                      {el?.description}
                    </p>
                  </div>
                </div>
                <div className={classes["main-actions"]}>
                  <p>{el?.employmentType}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className={classes["projects-section-info"]}>
          I don't have any work experience to display.
        </p>
      )}
    </>
  );
};

export default JobHunterWorkExp;
