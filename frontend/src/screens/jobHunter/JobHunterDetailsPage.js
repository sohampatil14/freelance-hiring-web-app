import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import JobHunterDetails from "../../components/jobHunterDetails/JobHunterDetails";
import LoadingSpinner from "../../components/layout/LoadingSpinner";
import { fetchJobHunter, reset } from "../../store/jobHunters/jobHunterSlice";

const JobHunterDetailsPage = () => {
  const params = useParams();
  const { jobHunterId } = params;

  const { isLoading } = useSelector((state) => state.jobHunters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobHunter(jobHunterId));
  }, [dispatch, jobHunterId]);

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
        <JobHunterDetails />
      )}
    </>
  );
};

export default JobHunterDetailsPage;
