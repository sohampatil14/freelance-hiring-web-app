import React from "react";
import classes from "./ProjectDetails.module.css";

const ProjectImageContainer = ({ project }) => {
  return (
    <div className={classes["project-image-container"]}>
      <img src={project?.photo?.url} alt={project?.title} />
    </div>
  );
};

export default ProjectImageContainer;
