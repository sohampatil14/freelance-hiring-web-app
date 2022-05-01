import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../../../store/auth/authSlice";
import { fetchMyProjects } from "../../../../store/JobHunterProjects/projectSlice";
import classes from "../../../jobHunterDetails/jobHunterDetails.module.css";
import LoadingSpinner from "../../../layout/LoadingSpinner";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileProjects from "./ProfileProjects/ProfileProject";
import ProfileSkills from "./ProfileSkills/ProfileSkills";

const JobHunterProfile = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const { isLoading: myProjectsLoading } = useSelector(
    (state) => state.jobHunterProjects
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchMyProjects());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className={classes["user-proile-section"]}>
          <ProfileHeader />
          <ProfileSkills />
          <ProfileProjects />
        </section>
      )}
    </>
  );
};

export default JobHunterProfile;
