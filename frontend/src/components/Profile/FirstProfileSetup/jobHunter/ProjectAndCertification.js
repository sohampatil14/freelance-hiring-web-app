import { ChakraProvider } from "@chakra-ui/react";
import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { buttonStyles } from "../../../layout/compnentStyles";
import AddCertificateModal from "./AddCertificateModal";
import AddProjectModal from "./AddProjectModal";
import CertificatesContainer from "./CertificatesContainer";
import classes from "./JobHunterUpdate.module.css";
import ProjectsContainer from "./ProjectsContainer";

const ProjectAndCertification = ({ changeStep }) => {
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [projectLoading, setProjectLoading] = useState(false);
  const [certificateLoading, setCertificateLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState({
    projects: false,
    certificates: false,
  });

  useEffect(() => {
    if (isSuccess.projects && isSuccess.certificates) {
      console.log("done");
      changeStep();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess.certificates, isSuccess.projects, setIsSuccess]);

  const addProjects = (projectData) => {
    setProjects((prevState) => [...projects, projectData]);
  };

  const addCertificates = (certificate) => {
    setCertificates((prevState) => [...certificates, certificate]);
  };

  const requestAddProjects = async () => {
    try {
      setProjectLoading(true);
      await axios.post(`/api/v1/projects/addMultiple`, {
        projects,
      });
      setProjectLoading(false);
      setIsSuccess((prev) => ({ ...prev, projects: true }));
    } catch (err) {
      setProjectLoading(false);
      setIsSuccess((prev) => ({ ...prev, projects: false }));
      console.log(err.response);
    }
  };

  const requestAddCertifcates = async () => {
    try {
      setCertificateLoading(true);
      await axios.patch(`/api/v1/users/updateMe`, {
        certificates,
      });
      setCertificateLoading(false);
      setIsSuccess((prev) => ({ ...prev, certificates: true }));
    } catch (err) {
      setCertificateLoading(false);
      setIsSuccess((prev) => ({ ...prev, certificates: false }));
      console.log(err.response.data);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // TODO: IF projects and certificates are empty then move to next step
    if (!projects && !certificates) {
      changeStep();
    }

    await requestAddProjects();
    await requestAddCertifcates();
  };

  return (
    <div>
      <div className={classes["section-projects"]}>
        <div className={classes["section-title"]}>
          <p>Project Section</p>
          <ChakraProvider>
            <AddProjectModal addProjects={addProjects} projects={projects}>
              <button
                className={`${classes["btn-small"]} ${classes["btn-primary"]}`}>
                +
              </button>
            </AddProjectModal>
          </ChakraProvider>
        </div>

        <ProjectsContainer projects={projects} />
        {/*  */}
      </div>

      <div className={classes["section-certificates"]}>
        <div className={classes["section-title"]}>
          <p>Certificates Section</p>
          <ChakraProvider>
            <AddCertificateModal
              addCertificates={addCertificates}
              certificates={certificates}>
              <button
                className={`${classes["btn-small"]} ${classes["btn-primary"]}`}>
                +
              </button>
            </AddCertificateModal>
          </ChakraProvider>
        </div>

        <CertificatesContainer certificates={certificates} />
      </div>

      <div
        style={{ textAlign: "right", marginRight: "20px", marginTop: "20px" }}>
        <Button
          sx={{
            ...buttonStyles,
            padding: "0.5rem 1rem",
            color: "#868e96",
            marginRight: "10px",
          }}
          onClick={changeStep}>
          Skip
        </Button>

        <Button
          sx={{ ...buttonStyles, padding: "0.5rem 1rem" }}
          variant='contained'
          onClick={submitHandler}
          disabled={projectLoading || certificateLoading}>
          {projectLoading || certificateLoading ? (
            <CircularProgress size='2.4rem' color='grey' />
          ) : (
            "Next"
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProjectAndCertification;
