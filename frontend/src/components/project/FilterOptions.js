import React, { useState } from "react";
import classes from "./Projects.module.css";

const FilterOptions = ({
  data,
  type,
  addElement,
  removeElement,
  techArray,
}) => {
  const [filteredData, setFilteredData] = useState(data.map((el) => el.value));
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data
      .map((el) => el.value)
      .filter((value) => {
        return value.toLowerCase().includes(searchWord.toLowerCase());
      });

    if (searchWord === "") {
      setFilteredData(data.map((el) => el.value));
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleClick = (value) => {
    // Check if value already there in array
    const doesValueExist = techArray.includes(value);

    // If value there the remove
    doesValueExist ? removeElement(value, type) : addElement(value, type);
    // If value no there then add
  };

  console.log(techArray);

  return (
    <div className={classes["filter-options--1"]}>
      <div className={classes["filter-search-input"]}>
        <input
          type='text'
          placeholder='Type to search'
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>

      {filteredData.length !== 0 && (
        <div className={classes.results}>
          {filteredData.map((value) => {
            return (
              <p
                key={value}
                style={{
                  color: techArray.includes(value) && "#0d6ddf",
                  textTransform: "capitalize",
                  marginBottom: "0.5rem",
                }}
                onClick={() => handleClick(value)}>
                {value}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FilterOptions;
