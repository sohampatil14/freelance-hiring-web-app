import React from "react";
import classes from "./Projects.module.css";

const FilterByKeyword = ({ searchTitle, onChange, onClick }) => {
  return (
    <div className={classes["keyword-panel"]}>
      <input
        onClick={onClick}
        onChange={onChange}
        value={searchTitle}
        type='text'
        placeholder='What are you looking for?'
        maxLength='40'
      />
    </div>
  );
};

export default FilterByKeyword;
