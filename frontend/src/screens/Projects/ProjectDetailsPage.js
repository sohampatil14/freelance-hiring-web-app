import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/layout/LoadingSpinner";
import ProjectDetails from "../../components/projectDetails/ProjectDetails";
import { fetchProject, reset } from "../../store/projects/projectSlice";

const ProjectDetailsPage = () => {
  const params = useParams();
  const { projectId } = params;

  const { isLoading } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProject(projectId));
  }, [dispatch, projectId]);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <ChakraProvider>
          <LoadingSpinner />
        </ChakraProvider>
      ) : (
        <ProjectDetails />
      )}
    </>
  );
};

export default ProjectDetailsPage;
