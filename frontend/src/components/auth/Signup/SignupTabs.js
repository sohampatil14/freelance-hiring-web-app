import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { makeStyles } from "@mui/styles";
import RecruiterSignupForm from "./RecruiterSignupForm";
import JobHunterSignupForm from "./JobHunterSignupForm";

const useStyles = makeStyles(() => ({
  tab: {
    marginBottom: "3rem",
  },
}));

const SignupTabs = () => {
  const [role, setRole] = useState("jobhunter");
  const classes = useStyles();

  const handleChange = (event, value) => {
    setRole(value);
  };

  return (
    <div className='hero-auth'>
      <div className='hero-form'>
        <TabContext value={role}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            className={classes.tab}>
            <TabList onChange={handleChange}>
              <Tab
                label='Signup as Job Hunter'
                style={{ fontSize: "1.2rem" }}
                value='jobhunter'
              />
              <Tab
                label='Signup as Recruiter'
                style={{ fontSize: "1.2rem" }}
                value='recruiter'
              />
            </TabList>
          </Box>
          <TabPanel value='jobhunter' style={{ width: "100%", padding: 0 }}>
            <JobHunterSignupForm />
          </TabPanel>
          <TabPanel value='recruiter' style={{ width: "100%", padding: 0 }}>
            <RecruiterSignupForm />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default SignupTabs;
