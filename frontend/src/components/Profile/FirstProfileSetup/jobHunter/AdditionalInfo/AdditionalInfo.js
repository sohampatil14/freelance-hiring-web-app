import { Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, updateUser } from "../../../../../store/auth/authSlice";
import { buttonStyles } from "../../../../layout/compnentStyles";
import classes from "../JobHunterUpdate.module.css";
import AddAvail from "./AddAvail";
import AddExperience from "./AddExperience";
import AddLocation from "./AddLocation";
import AddSkills from "./AddSkills";
import AddSocialLinks from "./AddSocialLinks";
import AddWorkExp from "./AddWorkExp";

const AdditionalInfo = () => {
  const [experienceLevel, setExperienceLevel] = useState("");
  const [availabilities, setAvailabilities] = useState([]);
  const [locations, setLocations] = useState([]);
  const [skills, setSkills] = useState([]);
  const [workExp, setWorkExp] = useState([]);
  const [linkedIn, setLinkedIn] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const { user, isError, isUpdateSuccess, message, isUpdateLoading } =
    useSelector((state) => state.auth);
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleExpLevelClick = (value) => {
    if (experienceLevel === value) setExperienceLevel("");
    else setExperienceLevel(value);
  };

  const handleAvailClick = (value) => {
    if (availabilities.includes(value))
      setAvailabilities((prev) => prev.filter((i) => i !== value));
    else setAvailabilities((prev) => [...prev, value]);
  };

  const handleLocation = (e) => {
    setLocations(e.map((el) => el.value));
  };

  const handleSkills = (e) => {
    setSkills(e.map((el) => el.value));
  };

  const handleWorkExp = (action, newObj, oldObj = {}) => {
    if (action === "add") {
      setWorkExp((prev) => [...prev, newObj]);

      // Delete
    } else if (action === "delete") {
      setWorkExp((prev) => prev.filter((el) => el.id !== newObj.id));

      // Edit
    } else if (action === "edit") {
      console.log(oldObj);
      const newWorks = workExp.map((element, index) => {
        if (element.id === oldObj.id) {
          return (workExp[index] = { ...newObj, id: new Date().toISOString() });
        }
        return workExp[index];
      });
      setWorkExp(newWorks);
    }
  };

  const handleSocialLinks = (e) => {
    const element = e.target;

    if (element.name === "linkedIn") setLinkedIn(element.value);
    else if (element.name === "gitHub") setGithubLink(element.value);
  };

  useEffect(() => {
    if (isError) alert.error(message);

    if (isUpdateSuccess) {
      navigate("/search/project");
    }

    dispatch(reset());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isError, isUpdateSuccess, message, dispatch, alert]);

  const submitHandler = () => {
    // console.log("experienceLevel", experienceLevel);
    // console.log("availabilities", availabilities);
    // console.log("locations", locations);
    // console.log("skills", skills);
    // console.log("workExp", workExp);
    // console.log("linkedIn", linkedIn);
    // console.log("githubLink", githubLink);

    if (skills.length === 0) {
      return alert.error("Skills are required");
    }

    const formData = {
      type: experienceLevel,
      availability: availabilities,
      preferredLocations: locations,
      skills,
      experience: workExp,
      linkedIn,
      githubLink,
    };

    //Call api
    dispatch(updateUser(formData));
  };

  return (
    <div className={classes["step3-form"]}>
      <AddExperience
        onClick={handleExpLevelClick}
        experienceLevel={experienceLevel}
      />
      <AddAvail onClick={handleAvailClick} availabilities={availabilities} />
      <AddLocation handleLocation={handleLocation} />
      <AddSkills handleSkills={handleSkills} />
      <AddWorkExp handleWorkExp={handleWorkExp} workArray={workExp} />
      <AddSocialLinks
        onChange={handleSocialLinks}
        linkedIn={linkedIn}
        githubLink={githubLink}
      />

      <div
        style={{ textAlign: "right", marginRight: "20px", marginTop: "20px" }}>
        <Button
          sx={{ ...buttonStyles, padding: "0.5rem 2rem" }}
          variant='contained'
          onClick={submitHandler}
          disabled={isUpdateLoading}>
          {isUpdateLoading ? (
            <CircularProgress size='2.4rem' color='grey' />
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </div>
  );
};

export default AdditionalInfo;
