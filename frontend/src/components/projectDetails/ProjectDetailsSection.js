import React from "react";
import classes from "./ProjectDetails.module.css";

const ProjectDetailsSection = ({ project }) => {
  return (
    <div className={classes["project-details"]}>
      <div className={classes["project-description"]}>
        <h1>Description</h1>
        <p>{project.description || ""}</p>
      </div>
      <div className={classes["project-tech-details"]}>
        <h1>Tools and Tech Stack</h1>
        <div className={classes["tech-skills"]}>
          {project?.tags?.map((el) => (
            <div className={classes["tech-skill"]} key={el}>
              {el}
            </div>
          ))}
        </div>
        <div className={classes["project-socials"]}>
          <a
            target='_blank'
            without='true'
            rel='noreferrer'
            href={project.projectLink || ""}>
            <button>See Project in Action</button>
          </a>
          <a
            target='_blank'
            without='true'
            rel='noreferrer'
            href={project.gitHubLink || ""}>
            <button>See source Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsSection;
