import { Tab, Tabs } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles(() => ({
  tab: {
    marginBottom: "3rem",
  },
}));

const LoginToggle = ({ handleRoleChange, role }) => {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    handleRoleChange(newValue);
  };

  return (
    <Box
      sx={{ borderBottom: 1, borderColor: "divider" }}
      className={classes.tab}>
      <Tabs
        textColor='primary'
        indicatorColor='primary'
        aria-label='secondary tabs example'
        onChange={handleChange}
        value={role}>
        <Tab
          value='job hunter'
          className={`${classes.btn} ${classes.jobCta} `}
          style={{ fontSize: "1.2rem" }}
          label='Login as Job Hunter'
        />
        <Tab
          className='recruiter_cta'
          value='recruiter'
          style={{ fontSize: "1.2rem" }}
          label='Login as Recruiter'
        />
      </Tabs>
    </Box>
  );
};

export default LoginToggle;
