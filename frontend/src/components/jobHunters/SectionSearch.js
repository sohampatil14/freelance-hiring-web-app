import classes from "./Users.module.css";

const SectionSearch = () => {
  return (
    <section className={classes["section-search"]}>
      <div className={classes["search-panel"]}>
        <p className={classes["page-title"]}>Explore Users</p>
      </div>
    </section>
  );
};

export default SectionSearch;
