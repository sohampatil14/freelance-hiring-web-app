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
import classes from "../JobHunterUpdate.module.css";
import Select from "react-select";
import { useAlert } from "react-alert";

const employment = [
  { label: "Full Time", value: "full time" },
  { label: "Part Time", value: "part time" },
  { label: "Internship", value: "internship" },
  { label: "Remote Job", value: "remote job" },
  { label: "Training", value: "training" },
  { label: "Freelance", value: "freelance" },
];

const selectStyles = {
  control: (base) => ({
    ...base,
    background: "#f1f3f5",
    fontSize: "1.2rem",
    padding: " 0 0",
  }),
};

const AddExperienceModal = ({ handleChange, action, work = {}, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const alert = useAlert();
  const [formData, setFormData] = useState({
    companyName: work.companyName || "",
    jobRole: work.jobRole || "",
    employmentType: work.employmentType || "",
    description: work.description || "",
  });

  const { companyName, jobRole, employmentType, description } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employmentType) return alert.error("Please select Employment type");

    if (action === "add") {
      const obj = {
        id: new Date().toISOString(),
        companyName,
        jobRole,
        employmentType,
        description,
      };

      handleChange("add", obj);
    } else if (action === "edit") {
      const obj = {
        companyName,
        jobRole,
        employmentType,
        description,
      };

      handleChange("edit", obj, work);
    }

    onClose();

    // Reset
    setFormData({
      companyName: "",
      jobRole: "",
      employmentType: "",
      description: "",
    });
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
        <ModalContent h='500px'>
          <ModalHeader>
            <h1 className={classes["add-project-title"]}>Add Experience</h1>
          </ModalHeader>
          <hr style={{ backgroundColor: "#ccc" }} />
          <ModalCloseButton />
          <ModalBody overflow='scroll'>
            <div className={classes["add-experience-modal-body"]}>
              <form onSubmit={handleSubmit}>
                <div className={classes["form-group"]}>
                  <label htmlFor='companyName'>Company Name *</label>
                  <input
                    id='companyName'
                    name='companyName'
                    value={companyName}
                    style={{ width: "100%" }}
                    type='text'
                    placeholder='Name of the Company'
                    onChange={onChange}
                    required
                  />
                </div>

                <div className={classes["form-group"]}>
                  <label htmlFor='jobRole'>Job Role *</label>
                  <input
                    id='jobRole'
                    name='jobRole'
                    value={jobRole}
                    style={{ width: "100%" }}
                    type='text'
                    placeholder='Ex. Product Manager, Sr. Developer'
                    onChange={onChange}
                    required
                  />
                </div>

                <div className={classes["form-group"]}>
                  <label htmlFor='employmentType'>Employment Type *</label>
                  <Select
                    options={employment}
                    name='city'
                    styles={selectStyles}
                    placeholder='Ex. Full Time'
                    onChange={(e) =>
                      setFormData((prevState) => ({
                        ...prevState,
                        employmentType: e.value,
                      }))
                    }
                  />
                </div>

                <div className={classes["form-group"]}>
                  <label htmlFor='employmentType'>
                    Description{" "}
                    <span style={{ opacity: 0.8, fontSize: "1rem" }}>
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    id='description'
                    name='description'
                    value={description}
                    rows='4'
                    cols='5'
                    style={{ resize: "vertical" }}
                    onChange={onChange}></textarea>
                </div>
                <ModalFooter>
                  <Button type='submit' colorScheme='blue' size='lg'>
                    {action === "add" ? "Submit" : "Update"}
                  </Button>
                </ModalFooter>
              </form>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddExperienceModal;
