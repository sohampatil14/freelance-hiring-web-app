import React from "react";
import SectionHeader from "./SectionHeader";
import classes from "../JobHunterUpdate.module.css";
import TechnologyArray from "../../../../../utils/TechnologyArray";
import Select from "react-select";

const selectStyles = {
  control: (base) => ({
    ...base,
    background: "#f1f3f5",
    fontSize: "1.2rem",
    padding: " 0 0",
  }),
};

const AddSkills = ({ handleSkills }) => {
  return (
    <section>
      <SectionHeader title='Skills and Expertise'></SectionHeader>
      <div className={classes["location-container"]}>
        <h1>Select skills *</h1>
        <Select
          isMulti
          name='aval'
          onChange={handleSkills}
          styles={selectStyles}
          options={TechnologyArray}
          className='basic-multi-select'
          classNamePrefix='select'
        />
      </div>
    </section>
  );
};

export default AddSkills;
