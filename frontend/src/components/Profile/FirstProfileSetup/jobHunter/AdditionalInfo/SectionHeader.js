import React from "react";
import classes from "../JobHunterUpdate.module.css";

const SectionHeader = ({ title }) => {
  return (
    <div className={classes["gridbox"]}>
      <div className={classes["divider"]}></div>
      <h1>{title}</h1>
      <div className={classes["divider"]}></div>
    </div>
  );
};

export default SectionHeader;
