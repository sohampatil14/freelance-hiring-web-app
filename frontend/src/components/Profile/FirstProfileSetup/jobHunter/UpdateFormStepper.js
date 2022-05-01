import { Box } from "@chakra-ui/react";
import { Step, StepLabel, Stepper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import AddDetailsForm from "./AddDetailsForm";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import classes from "./JobHunterUpdate.module.css";
import ProjectAndCertification from "./ProjectAndCertification";

const steps = [
  "Add Details",
  "Project and Certification",
  "Additional Information",
];

const useStyles = makeStyles(() => ({
  step_label_root: {
    fontSize: "1.2rem",
  },
}));

const UpdateFormStepper = () => {
  const classesMUI = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    console.log("hello");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  console.log(activeStep);

  let stepContent;
  if (activeStep === 0) {
    stepContent = <AddDetailsForm changeStep={handleNext} />;
  } else if (activeStep === 1) {
    stepContent = <ProjectAndCertification changeStep={handleNext} />;
  } else {
    stepContent = <AdditionalInfo changeStep={handleNext} />;
  }

  return (
    <>
      <div className={classes["profile-update-steps"]}>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => {
              return (
                <Step key={label}>
                  <StepLabel classes={{ label: classesMUI.step_label_root }}>
                    {label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
      </div>
      {stepContent}
    </>
  );
};

export default UpdateFormStepper;
