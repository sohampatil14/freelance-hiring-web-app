import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import classes from "../../../FirstProfileSetup/jobHunter/JobHunterUpdate.module.css";
import LocationArray from "../../../../../utils/LocationArray";
import Select from "react-select";
import { reset, updateUser } from "../../../../../store/auth/authSlice";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";

const selectStyles = {
  control: (base) => ({
    ...base,
    background: "#f1f3f5",
    fontSize: "1.2rem",
    padding: " 0 1rem",
  }),
};
const EditProfileHeader = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    photo: "",
    name: user.name || "",
    email: user.email || "",
    title: user.title || "",
    protfolioLink: user.protfolioLink || "",
    bio: user.bio || "",
    city: user.city || "",
  });
  const [photoPreview, setPhotoPreview] = useState(user?.photo?.url || "");

  const { photo, name, email, title, protfolioLink, bio, city } = formData;

  const alert = useAlert();
  const dispatch = useDispatch();
  const { isUpdateLoading, isUpdateSuccess } = useSelector(
    (state) => state.auth
  );

  console.log(title);

  const handleImage = (e) => {
    if (e.target.files[0] && !e.target.files[0].type.startsWith("image")) {
      return alert.error("Only images are allowed");
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setPhotoPreview(reader.result);
        setFormData((prevState) => ({
          ...prevState,
          photo: reader.result,
        }));
      }
    };

    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
  };

  const onChange = (e) => {
    if (e.target.name === "photo") {
      handleImage(e);
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  useEffect(() => {
    if (isUpdateSuccess) {
      alert.success("Profile Update Successfully");
    }

    if (isUpdateSuccess) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdateLoading, isUpdateSuccess]);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [isUpdateSuccess, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!photoPreview) return alert.error("Please select a photo");

    // Create formData
    const updateData = new FormData();
    updateData.set("name", name);
    updateData.set("email", email);
    updateData.set("photo", photo);
    updateData.set("title", title);
    updateData.set("protfolioLink", protfolioLink);
    updateData.set("bio", bio);
    updateData.set("city", city);

    // //Call api
    dispatch(updateUser(formData));
  };

  return (
    <>
      {children ? <span onClick={onOpen}>{children}</span> : <></>}

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='4xl'
        motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent h='500px' w='700px'>
          <ModalHeader>
            <h1 className={classes["add-project-title"]}>Edit Details</h1>
          </ModalHeader>
          <hr style={{ backgroundColor: "#ccc" }} />
          <ModalCloseButton />
          <ModalBody overflow='scroll'>
            <div className={classes["add-project-modal-body"]}>
              <form onSubmit={submitHandler}>
                <div className={classes["form-image-container"]}>
                  <label
                    htmlFor='photo'
                    style={{ width: "180px", height: "180px" }}>
                    <input
                      name='photo'
                      type='file'
                      id='photo'
                      style={{ display: "none" }}
                      onChange={onChange}
                      accept='image/*'
                    />
                    <div className={classes["profile-image"]}>
                      {photoPreview ? (
                        <img src={photoPreview} alt='avatar' />
                      ) : (
                        <p>Add Photo +</p>
                      )}
                    </div>
                  </label>
                </div>

                <div
                  className={classes["form-project-details"]}
                  style={{ width: "80%" }}>
                  <div className={classes["form-group"]}>
                    <label htmlFor='name'>Full Name</label>
                    <input
                      id='name'
                      name='name'
                      value={name}
                      type='text'
                      placeholder='Ex. Amazon,Google'
                      onChange={onChange}
                      required
                    />
                  </div>

                  <div className={classes["form-group"]}>
                    <label htmlFor='email'>Email *</label>
                    <input
                      id='email'
                      name='email'
                      value={email}
                      type='text'
                      placeholder='Ex. johndoe@gmail.com'
                      onChange={onChange}
                      required
                    />
                  </div>

                  <div className={classes["form-group"]}>
                    <label htmlFor='title'>Expertize *</label>
                    <input
                      id='title'
                      name='title'
                      value={title}
                      type='text'
                      placeholder='Ex. Full Stack Developer'
                      onChange={onChange}
                      required
                    />
                  </div>

                  <div className={classes["form-group"]}>
                    <label htmlFor='title'>Portfolio Link *</label>
                    <input
                      id='protfolioLink'
                      name='protfolioLink'
                      value={protfolioLink}
                      type='text'
                      placeholder='Ex. https://github.com/username'
                      onChange={onChange}
                      required
                    />
                  </div>

                  <div className={classes["form-group"]}>
                    <label htmlFor='city'>City</label>
                    <Select
                      options={LocationArray}
                      name='city'
                      styles={selectStyles}
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          city: e.value,
                        }))
                      }
                    />
                  </div>

                  <div className={classes["form-group"]}>
                    <label htmlFor='protbiofolioLink'>
                      Write something about yourself *
                    </label>
                    <textarea
                      id='bio'
                      name='bio'
                      value={bio}
                      rows='4'
                      cols='50'
                      style={{ resize: "vertical" }}
                      onChange={onChange}></textarea>
                  </div>
                  <ModalFooter>
                    <Button
                      type='submit'
                      colorScheme='blue'
                      size='lg'
                      disabled={isUpdateLoading}>
                      {isUpdateLoading ? "Loading..." : "Update"}
                    </Button>
                  </ModalFooter>
                </div>
              </form>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProfileHeader;
