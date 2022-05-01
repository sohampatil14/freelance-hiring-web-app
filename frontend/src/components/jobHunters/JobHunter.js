import React from "react";
import classes from "./Users.module.css";
import DefaultPhoto from "../../assets/default.jpg";
import { Link, useNavigate } from "react-router-dom";

const JobHunter = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className={classes["container"]}>
      <div className={classes["image-container"]}>
        <Link to={`/jobHunter/${user._id}`}>
          <img
            className={classes["image-container--avatar"]}
            src={user?.photo?.url ? user.photo.url : DefaultPhoto}
            alt={user.name}
          />
        </Link>
      </div>
      <div className={classes["info-container"]}>
        <div className={classes["info-container--one"]}>
          <ul className={classes["user-details"]}>
            <Link to={`/jobHunter/${user._id}`}>
              <li className={classes["user-name"]}>{user.name}</li>
            </Link>
            <li className={classes["user-location"]}>{user?.city}</li>
            <li className={classes["user-type"]}>{user?.type}</li>
          </ul>
          <p className={classes["users-title"]}>{user?.title}</p>
          <div className={classes["user-skills"]}>
            {user?.skills.map((skill) => (
              <div key={skill} className={classes["user-skill"]}>
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className={classes["info-container--two"]}>
          <ul className={classes["user-availabilities"]}>
            {user?.availability.map((available) => (
              <li className={classes["user-availability"]} key={available}>
                {available}
              </li>
            ))}
          </ul>
          <button
            className={classes["user-profile"]}
            onClick={() => {
              navigate(`/jobHunter/${user._id}`);
            }}>
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobHunter;
