import React from "react";
import SectionHeader from "./SectionHeader";
import classes from "../JobHunterUpdate.module.css";
import Select from "react-select";
import LocationArray from "../../../../../utils/LocationArray";

const selectStyles = {
  control: (base) => ({
    ...base,
    background: "#f1f3f5",
    fontSize: "1.2rem",
    padding: " 0 0",
  }),
};

const AddLocation = ({ handleLocation }) => {
  return (
    <section>
      <SectionHeader title='Location'></SectionHeader>
      <div className={classes["location-container"]}>
        <h1>Select cities where you are willing to work</h1>
        <Select
          isMulti
          name='aval'
          onChange={handleLocation}
          styles={selectStyles}
          options={LocationArray}
          className='basic-multi-select'
          classNamePrefix='select'
        />
      </div>
    </section>
  );
};

export default AddLocation;
