import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SectionSearch from "../components/jobHunters/SectionSearch";
import SectionUsers from "../components/jobHunters/SectionUsers";
import { fetchJobHunters, reset } from "../store/jobHunters/jobHunterSlice";

const ShowJobHunters = () => {
  const dispatch = useDispatch();
  const { isError, message } = useSelector((state) => state.jobHunters);

  useEffect(() => {
    dispatch(fetchJobHunters({ page: "1", perPage: "100" }));
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
      <SectionUsers />
    </>
  );
};

export default ShowJobHunters;
