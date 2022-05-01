import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./jobHunterDetails.module.css";

const JobHunterProjects = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className={classes["user-projects-section"]}>
      <h2>Pride Projects</h2>
      <p className={classes["projects-section-info"]}>
        Here are some of the projects that I have created or was associated
        with. Click on the below card for more details on any of the projects.
      </p>

      {user?.projects?.length > 0 ? (
        <div className={classes["user-projects"]}>
          {user?.projects.map((el, i) => {
            return (
              <div
                key={i}
                className={classes["user-project"]}
                onClick={() => navigate(`/project/${el._id}`)}>
                <div className={classes["user-project-info"]}>
                  <img src={el?.photo?.url} alt={el?.title} />
                  <p className={classes["project-name"]}>{el?.title}</p>
                  <div className={classes["project-skills"]}>
                    {el?.tags?.map((element, i) => {
                      return <p key={i}>{element}</p>;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className={classes["projects-section-info"]}>
          I don't have any projects to display.
        </p>
      )}
    </div>
  );
};

export default JobHunterProjects;
