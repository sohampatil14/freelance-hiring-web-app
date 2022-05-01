import React from "react";
import classes from "./JobHunterUpdate.module.css";

const ProjectsContainer = ({ projects }) => {
  return (
    <div className={classes["projects"]}>
      {projects.length > 0 ? (
        <>
          {projects.map((project, index) => (
            <img src={project.photo} alt={project.name} key={index}></img>
          ))}
        </>
      ) : (
        <div className={classes["no-projects"]}>No Projects</div>
      )}
    </div>
  );
};

export default ProjectsContainer;
