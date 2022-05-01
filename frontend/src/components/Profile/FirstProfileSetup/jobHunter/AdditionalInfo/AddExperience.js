import React from "react";
import classes from "../JobHunterUpdate.module.css";
import SectionHeader from "./SectionHeader";

const experience = [
  { label: "Fresher", value: "fresher" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Professional", value: "professional" },
];

const AddExperience = ({ onClick, experienceLevel }) => {
  const handleClick = (value) => {
    onClick(value);
  };

  return (
    <section>
      <SectionHeader title='Experience'></SectionHeader>
      <div className={classes["experience-level-container"]}>
        {experience.map((exp) => {
          return (
            <div
              className={`${classes["experience-level-box"]} ${
                experienceLevel === exp.value
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

export default AddExperience;
