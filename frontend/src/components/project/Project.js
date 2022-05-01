import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Projects.module.css";

const Project = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div
      className={classes["project"]}
      onClick={() => navigate(`/project/${project._id}`)}>
      <img src={project.photo.url} alt={project.title} />
      <p>{project.title}</p>
    </div>
  );
};

export default Project;
