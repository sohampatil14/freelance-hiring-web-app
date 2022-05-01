import React from "react";
import SectionHeader from "./SectionHeader";
import classes from "../JobHunterUpdate.module.css";

const avail = [
  { label: "Full Time", value: "full time" },
  { label: "Part Time", value: "part time" },
  { label: "Internship", value: "internship" },
];

const AddAvail = ({ onClick, availabilities }) => {
  const handleClick = (value) => {
    onClick(value);
  };

  return (
    <section>
      <SectionHeader title='Availability'></SectionHeader>
      <div className={classes["experience-level-container"]}>
        {avail.map((exp) => {
          return (
            <div
              className={`${classes["experience-level-box"]} ${
                availabilities.includes(exp.value)
                  ? classes["experience-level-box-active"]
                  : ""
              }`}
              onClick={handleClick.bind(this, exp.value)}
              key={exp.value}>
              {exp.label}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AddAvail;
