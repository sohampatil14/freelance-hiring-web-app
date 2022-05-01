import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "../../../../jobHunterDetails/jobHunterDetails.module.css";
import EditProjectModal from "./EditProjectModal";

const actionStyles = {
  display: "flex",
  position: "absolute",
  top: "5px",
  right: "5px",
  gap: "1rem",
  alignItems: "center",
};

const ProfileProjects = () => {
  const navigate = useNavigate();

  const { myProjects } = useSelector((state) => state.jobHunterProjects);
  console.log("myProjects", myProjects);

  return (
    <div className={classes["user-projects-section"]}>
      <h2>Pride Projects</h2>
      <p className={classes["projects-section-info"]}>
        Here are some of the projects that I have created or was associated
        with. Click on the below card for more details on any of the projects.
      </p>

      {myProjects?.length > 0 ? (
        <div className={classes["user-projects"]}>
          {myProjects?.map((el, i) => {
            return (
              <div
                key={i}
                className={classes["user-project"]}
                style={{ position: "relative" }}>
                <div style={actionStyles}>
                  <EditProjectModal project={el}>
                    <button
                      className={`${classes["btn-xs"]} ${classes["btn-primary"]}`}
                      onClick={() => {
                        console.log("hello");
                      }}>
                      <EditIcon />
                    </button>
                  </EditProjectModal>
                  <button
                    className={`${classes["btn-xs"]} ${classes["btn-danger"]}`}>
                    <DeleteIcon />
                  </button>
                </div>

                <div className={classes["user-project-info"]}>
                  <img src={el?.photo?.url} alt={el?.title} />
                  <p
                    className={classes["project-name"]}
                    onClick={() => navigate(`/project/${el._id}`)}>
                    {el?.title}
                  </p>
                  <div className={classes["project-skills"]}>
                    {el?.tags?.map((element, i) => {
                      return <p key={i}>{element}</p>;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className={classes["projects-section-info"]}>
          I don't have any projects to display.
        </p>
      )}
    </div>
  );
};

export default ProfileProjects;
