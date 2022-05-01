import React, { useState } from "react";
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
import classes from "./JobHunterUpdate.module.css";
import Select from "react-select";
import techarray from "../../../../utils/TechnologyArray";
import { useAlert } from "react-alert";

const selectStyles = {
  control: (base) => ({
    ...base,
    background: "#f1f3f5",
    fontSize: "1.2rem",
    padding: " 0 0",
  }),
};

const AddProjectModal = ({ addProjects, projects, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const alert = useAlert();

  const [formData, setFormData] = useState({
    photo: "",
    title: "",
    description: "",
    projectLink: "",
    gitHubLink: "",
  });
  const [tags, setTags] = useState([]);
  const [photoPreview, setPhotoPreview] = useState("");
  const { photo, title, description, projectLink, gitHubLink } = formData;

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

  const resetData = () => {
    setFormData({
      photo: "",
      title: "",
      description: "",
      projectLink: "",
      gitHubLink: "",
    });
    setPhotoPreview("");
    setTags([]);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!photo) return alert.error("Photo is required");

    const selectedTags = tags?.map((tech) => tech.value);

    const projectData = {
      ...formData,
      photo,
      tags: selectedTags,
    };

    addProjects(projectData);
    onClose();
    resetData();
  };

  const openModal = () => {
    if (projects.length === 3) {
      return alert.show("Currently, use can add only upto 3 projects");
    }

    onOpen();
  };

  return (
    <>
      {children ? <span onClick={openModal}>{children}</span> : <></>}

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='4xl'
        motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent h='500px'>
          <ModalHeader>
            <h1 className={classes["add-project-title"]}>Add Project</h1>
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

                <div className={classes["form-project-details"]}>
                  <div className={classes["form-group"]}>
                    <label htmlFor='name'>Project title</label>
                    <input
                      id='name'
                      name='title'
                      value={title}
                      type='text'
                      placeholder='Name of the project'
                      onChange={onChange}
                      required
                    />
                  </div>

                  <div className={classes["form-group"]}>
                    <label htmlFor='name'>Project Link</label>
                    <input
                      id='name'
                      name='projectLink'
                      value={projectLink}
                      type='text'
                      placeholder='Ex. https://projecturl.com'
                      onChange={onChange}
                      required
                    />
                  </div>

                  <div className={classes["form-group"]}>
                    <label htmlFor='name'>Source Code</label>
                    <input
                      id='name'
                      name='gitHubLink'
                      value={gitHubLink}
                      type='text'
                      placeholder='Ex. https://github.com/username/repo'
                      onChange={onChange}
                      required
                    />
                  </div>

                  <div className={classes["form-group"]}>
                    <label htmlFor='name'>Add Technologies Used</label>
                    <Select
                      isMulti
                      name='aval'
                      onChange={setTags}
                      styles={selectStyles}
                      options={techarray}
                      className='basic-multi-select'
                      classNamePrefix='select'
                    />
                  </div>

                  <div className={classes["form-group"]}>
                    <label htmlFor='bio'>Project Description</label>
                    <textarea
                      id='bio'
                      name='description'
                      value={description}
                      rows='4'
                      cols='5'
                      style={{ resize: "vertical" }}
                      onChange={onChange}
                      required></textarea>
                  </div>
                  <ModalFooter>
                    <Button type='submit' colorScheme='blue' size='lg'>
                      Submit
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

export default AddProjectModal;
