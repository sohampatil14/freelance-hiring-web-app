import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProjectDetails.module.css";
import ProjectDetailsHeader from "./ProjectDetailsHeader";
import ProjectDetailsSection from "./ProjectDetailsSection";
import ProjectImageContainer from "./ProjectImageContainer";
import ProjectUserDetails from "./ProjectUserDetails";
import io from "socket.io-client";
import { addNotifications } from "../../store/notifications/notificatonSlice";

const ENDPOINT = "http://localhost:5000";
var socket;

const ProjectDetails = () => {
  const { singleProject } = useSelector((state) => state.projects);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user?.id || !user?.role) return;

    let timer;

    if (user.role === "recruiter") {
      timer = setTimeout(() => {
        console.log("Send notification");
        socket = io(ENDPOINT);
        dispatch(
          addNotifications({
            user: singleProject.user._id,
            content: "A recruiter viewed your project",
          })
        );
        console.log("hello");
        socket.emit("send notification", {
          action: "project",
          recruitId: user.id,
          jobHunterId: singleProject.user._id,
        });
      }, 10000);
    }

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(singleProject);

  return (
    <section className={classes["project-detail-section"]}>
      <ProjectDetailsHeader project={singleProject} />
      <ProjectImageContainer project={singleProject} />
      <ProjectDetailsSection project={singleProject} />
      <ProjectUserDetails project={singleProject} />
    </section>
  );
};

export default ProjectDetails;
