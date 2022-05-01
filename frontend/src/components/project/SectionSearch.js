import React, { useState } from "react";
import FilterByTech from "./FilterByTech";
import FilterByKeyword from "./FilterByKeyword";
import classes from "./Projects.module.css";
import FilterOptions from "./FilterOptions";
import TechnologyArray from "../../utils/TechnologyArray";
import { Search2Icon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { fetchProjects } from "../../store/projects/projectSlice";

const SearchPanel = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [techArray, setTechArray] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const dispatch = useDispatch();

  const showFilterBar = () => {
    setShowOptions((prevState) => !prevState);
  };

  const onSearchChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const addElementToTechArray = (value, type) => {
    if (techArray.length === 5) return;

    setTechArray((prevElements) => {
      return [...prevElements, value];
    });
  };

  const removeElementFromTechArray = (value, type) => {
    setTechArray((prevElements) => {
      return prevElements.filter((el) => {
        return el !== value;
      });
    });
  };

  const handleSumbit = () => {
    setShowOptions(false);

    dispatch(
      fetchProjects({
        page: "1",
        perPage: "12",
        keyword: searchTitle,
        tags: techArray,
      })
    );
  };

  return (
    <section className={classes["section-search"]}>
      <div className={classes["search-panel"]}>
        <p className={classes["page-title"]}>Explore Work</p>
        <div className={classes["filter-panel"]}>
          <FilterByTech
            filter={"Technology"}
            showFilterBar={showFilterBar}
            array={techArray}
          />
          <FilterByKeyword
            onClick={() => setShowOptions(false)}
            searchTitle={searchTitle}
            onChange={onSearchChange}
          />
          <button className='btn btn-small' onClick={handleSumbit}>
            <Search2Icon />
          </button>
        </div>

        {showOptions && (
          <FilterOptions
            type={"Tech"}
            techArray={techArray}
            data={TechnologyArray}
            addElement={addElementToTechArray}
            removeElement={removeElementFromTechArray}
          />
        )}
      </div>
    </section>
  );
};

export default SearchPanel;
