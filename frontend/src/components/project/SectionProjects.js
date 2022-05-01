import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Project from "./Project";
import classes from "./Projects.module.css";
import ProjectsSkeletion from "./ProjectsSkeletion";

const SectionProjects = () => {
  const { projects, isLoading } = useSelector((state) => state.projects);

  return (
    <section className={classes["section-projects"]}>
      <div className={classes["projects"]}>
        {isLoading ? (
          <ChakraProvider>
            <ProjectsSkeletion />
          </ChakraProvider>
        ) : projects.length === 0 ? (
          <p className='not-found grid-span'>Couldn't find any project.</p>
        ) : (
          projects.map((project) => (
            <Project key={project._id} project={project} />
          ))
        )}
      </div>
    </section>
  );
};

export default SectionProjects;
