import React from "react";
import classes from "./JobHunterUpdate.module.css";

const CertificatesContainer = ({ certificates }) => {
  return (
    <div className={classes["projects"]}>
      {certificates.length > 0 ? (
        <>
          {certificates.map((certificate, index) => (
            <img src={certificate} alt='certificate' key={index}></img>
          ))}
        </>
      ) : (
        <div className={classes["no-projects"]}>No Certificates</div>
      )}
    </div>
  );
};

export default CertificatesContainer;
