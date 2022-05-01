import { EditIcon } from "@chakra-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import classes from "../../../../jobHunterDetails/jobHunterDetails.module.css";
import EditProfileSkills from "./EditProfileSkills";

const ProfileSkills = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className={classes["user-skills-section"]}>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flex: "1",
          alignItems: "center",
        }}>
        <h2>My Skills</h2>
        <EditProfileSkills user={user}>
          <button className={`${classes["btn-xs"]} ${classes["btn-primary"]}`}>
            <EditIcon />
          </button>
        </EditProfileSkills>
      </div>
      <p>
        I have hands on experience with these languages, technology stacks,
        libraries, frameworks, databases etc.
      </p>
      {user?.skills?.length > 0 ? (
        <div className={classes["user-skills"]}>
          {user.skills.map((el) => (
            <div className={classes["user-skill"]} key={el}>
              {el}
            </div>
          ))}
        </div>
      ) : (
        <p>I don't have any skills to display.</p>
      )}
    </div>
  );
};

export default ProfileSkills;
