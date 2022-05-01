import React from "react";
import classes from "./jobHunterDetails.module.css";
import DefaultImage from "../../assets/default.jpg";

const JobHunterDetailsHeader = ({ user }) => {
  return (
    <>
      <div className={classes["user-header"]}>
        <div className={classes["user-image-container"]}>
          <img src={user?.photo?.url || DefaultImage} alt={user?.name} />
        </div>
        <div className={classes["user-personal-details"]}>
          <div className={classes["user-contact"]}>
            <h1 className={classes["user-name"]}>
              {user?.name} <span>{user?.type}</span>
            </h1>
            <p>{user?.city}</p>
          </div>
          <p className={classes["user-title"]}>{user?.title}</p>
          <p className={classes["user-bio"]}>{user?.bio}</p>
          <div className={classes["user-email"]}>
            <a href={`mailto:${user?.email}`}>Email</a>
          </div>
          <div className={classes["user-socials"]}>
            {/* <a href=''>Git</a>
          <a href=''>Goo</a>
          <a href=''>Mrr</a> */}
            {/* TODO:Add Socials */}
          </div>
        </div>
      </div>
      <div className={classes["user-profile-actions"]}>
        <a href={`mailto:${user?.email}`}>
          <button className='btn'>Send Email</button>
        </a>
      </div>

      <div className={classes["user-profile-details"]}>
        <span></span>
        <p>Projects, Certifications and Skills</p>
        <span></span>
      </div>
    </>
  );
};

export default JobHunterDetailsHeader;
