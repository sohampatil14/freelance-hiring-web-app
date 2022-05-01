import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import classes from "./Projects.module.css";

const FilterByTech = ({ showFilterBar, array, filter }) => {
  const handleClickFilter = () => {
    showFilterBar();
  };

  const returnText =
    array?.length === 0 ? (
      <div className={classes["filter"]} onClick={handleClickFilter}>
        <div className={classes["filter-intial-text"]}>
          <h3>{filter}</h3>
          <p>What tech are you looking for ?</p>
        </div>
        <ChevronDownIcon width={20} height={20} color='#0d6ddf' />
      </div>
    ) : (
      <p
        style={{
          fontSize: "1.2rem",
          textTransform: "capitalize",
          cursor: "pointer",
          lineHeight: "1.2",
        }}
        onClick={showFilterBar}>
        {array?.join(", ")}
      </p>
    );

  return returnText;
};

export default FilterByTech;
