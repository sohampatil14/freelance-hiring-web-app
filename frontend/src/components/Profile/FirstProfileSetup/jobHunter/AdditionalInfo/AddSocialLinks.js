import React from "react";
import SectionHeader from "./SectionHeader";
import classes from "../JobHunterUpdate.module.css";
import LinkedIn from "../../../../../assets/linkedin.webp";
import GitHub from "../../../../../assets/github.webp";

const AddSocialLinks = ({ onChange, linkedIn, githubLink }) => {
  return (
    <section>
      <SectionHeader title='Social Links'></SectionHeader>
      <div className={classes["location-container"]}>
        <form className={classes["grid-2"]}>
          <div className={classes["form-group"]}>
            <label htmlFor='linkedIn'>
              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <img src={LinkedIn} alt='linkedIn' />
                LinkedIn
              </div>
            </label>
            <input
              id='linkedIn'
              name='linkedIn'
              value={linkedIn}
              type='text'
              placeholder='Ex. username'
              onChange={onChange}
              required
            />
          </div>

          <div className={classes["form-group"]}>
            <label htmlFor='gitHub'>
              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <img src={GitHub} alt='Github' />
                GitHub
              </div>
            </label>
            <input
              id='gitHub'
              name='gitHub'
              value={githubLink}
              type='text'
              placeholder='Ex. username'
              onChange={onChange}
              required
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddSocialLinks;
