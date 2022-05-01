import React from "react";
import classes from "./jobHunterDetails.module.css";

const JobHunterCertificates = ({ user }) => {
  return (
    <div className={classes["user-certificates-section"]}>
      <h2>Certification and Awards</h2>
      <p>Certificates and awards that I achieved with my skills and talent.</p>
      <div className={classes["user-certificates"]}>
        {/* TODO: onClick Image Show Image Preview */}
        {user?.certifications?.length > 0 ? (
          user?.certifications?.map((el, index) => {
            return (
              <div className={classes["user-certificate"]} key={index}>
                <img src={el.url} alt='certificate' />
              </div>
            );
          })
        ) : (
          <p>I don't have any certificates or awards to show..</p>
        )}
      </div>
    </div>
  );
};

export default JobHunterCertificates;
