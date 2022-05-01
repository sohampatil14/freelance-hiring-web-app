import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SectionProjects from "../components/project/SectionProjects";
import SectionSearch from "../components/project/SectionSearch";
import { fetchProjects, reset } from "../store/projects/projectSlice";

const ShowProjects = () => {
  const dispatch = useDispatch();
  const { isError, message } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects({ page: "1", perPage: "100", keyword: "" }));
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    return () => {
      dispatch(reset());
    };
  }, [dispatch, isError, message]);

  return (
    <>
      <SectionSearch />
      <SectionProjects />
    </>
  );
};

export default ShowProjects;
