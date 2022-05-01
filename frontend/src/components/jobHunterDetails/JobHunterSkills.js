import React from "react";
import classes from "./jobHunterDetails.module.css";

const JobHunterSkills = ({ user }) => {
  return (
    <div className={classes["user-skills-section"]}>
      <h2>My Skills</h2>
      <p>
        I have hands on experience with these languages, technology stacks,
        libraries, frameworks, databases etc.
      </p>
      {user?.skills?.length > 0 ? (
        <div className={classes["user-skills"]}>
          {user.skills.map((el) => (
            <div className={classes["user-skill"]} key={el}>
              {el}
            </div>
          ))}
        </div>
      ) : (
        <p>I don't have any skills to display.</p>
      )}
    </div>
  );
};

export default JobHunterSkills;
