import { EditIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../../../store/auth/authSlice";
import classes from "../../../jobHunterDetails/jobHunterDetails.module.css";
import LoadingSpinner from "../../../layout/LoadingSpinner";
import EditRecruiterProfile from "./EditRecruiterProfile";
import DefaultImage from "../../../../assets/default.jpg";

const RecruiterProfile = () => {
  const { isLoading, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className={classes["user-proile-section"]}>
          <>
            <div className={classes["user-header"]}>
              <div className={classes["user-image-container"]}>
                <img src={user?.photo?.url || DefaultImage} alt={user?.name} />
              </div>
              <div className={classes["user-personal-details"]}>
                <div className={classes["user-contact"]}>
                  <h1 className={classes["user-name"]}>{user?.name}</h1>
                  <EditRecruiterProfile user={user}>
                    <button
                      className={`${classes["btn-xs"]} ${classes["btn-primary"]}`}>
                      <EditIcon />
                    </button>
                  </EditRecruiterProfile>
                </div>
                <p className={classes["user-bio"]}>{user?.description}</p>
                <div style={{ display: "flex", gap: "2rem" }}>
                  <div className={classes["user-email"]}>
                    <a href={`mailto:${user?.email}`}>Email</a>
                  </div>
                  <div className={classes["user-email"]}>
                    <a
                      href={`${user?.website}`}
                      without
                      rel='noreferrer'
                      target='_blank'
                      style={{ display: "flex", alignItems: "center" }}>
                      Company Website <ExternalLinkIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        </section>
      )}
    </>
  );
};

export default RecruiterProfile;
