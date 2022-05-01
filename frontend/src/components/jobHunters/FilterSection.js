import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { fetchJobHunters } from "../../store/jobHunters/jobHunterSlice";
import availabilities from "../../utils/AvalArray";
import locations from "../../utils/LocationArray";
import techarray from "../../utils/TechnologyArray";
import classes from "./Users.module.css";

const FilterSection = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedAval, setSelectedAval] = useState(null);

  const dispatch = useDispatch();

  const handleSumbit = () => {
    const techArray = selectedTech?.map((tech) => tech.value);
    const locationArray = selectedLocation?.map((location) => location.value);
    const avalArray = selectedAval?.map((aval) => aval.value);

    const obj = {};
    if (techArray?.length > 0) obj.skills = techArray;
    if (locationArray?.length > 0) obj.preferredLocations = locationArray;
    if (avalArray?.length > 0) obj.availability = avalArray;

    dispatch(fetchJobHunters(obj));
  };

  return (
    <div className={classes["filter-section"]}>
      <div className={classes["page-title"]}>
        <h2 style={{ display: "inline-block", borderBottom: "1px solid #ccc" }}>
          Fitlers
        </h2>
      </div>

      <div className={classes["all-fitlers"]}>
        <div className={classes["filter"]}>
          <p>Fitler By Technology</p>
          <Select
            isMulti
            name='tech'
            options={techarray}
            onChange={setSelectedTech}
            className='basic-multi-select select'
            classNamePrefix='select'
          />
        </div>
        <div className={classes["filter"]}>
          <p>Fitler By Location</p>
          <Select
            isMulti
            name='location'
            onChange={setSelectedLocation}
            options={locations}
            className='basic-multi-select'
            classNamePrefix='select'
          />
        </div>
        <div className={classes["filter"]}>
          <p>Fitler By Availability</p>
          <Select
            isMulti
            name='aval'
            onChange={setSelectedAval}
            options={availabilities}
            className='basic-multi-select'
            classNamePrefix='select'
          />
        </div>
      </div>

      <div>
        <button
          className='btn'
          style={{ marginTop: " 1.5rem", width: "90px" }}
          onClick={handleSumbit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
