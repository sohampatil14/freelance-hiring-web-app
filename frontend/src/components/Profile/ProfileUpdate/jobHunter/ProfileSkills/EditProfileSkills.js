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
import techarray from "../../../../../utils/TechnologyArray";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { reset, updateUser } from "../../../../../store/auth/authSlice";

const selectStyles = {
  control: (base) => ({
    ...base,
    background: "#f1f3f5",
    fontSize: "1.2rem",
    padding: " 0 1rem",
  }),
};

const EditProfileSkills = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [skills, setSkills] = useState(user?.skills || []);

  const dispatch = useDispatch();
  const { isUpdateLoading, isUpdateSuccess } = useSelector(
    (state) => state.auth
  );

  const previousSkills = [];
  user?.skills?.forEach((skill, i) => {
    previousSkills[i] = {
      label: skill.replace(skill[0], skill[0].toUpperCase()),
      value: skill,
    };
  });

  const handleSubmit = () => {
    const selectedSkills = skills.map((skill) => {
      if (skill?.label) return skill.value;
      else return skill;
    });

    const obj = {
      skills: selectedSkills,
      photo: "",
    };

    dispatch(updateUser(obj));
  };

  useEffect(() => {
    if (isUpdateSuccess) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdateSuccess]);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [isUpdateSuccess, dispatch]);

  return (
    <>
      {children ? <span onClick={onOpen}>{children}</span> : <></>}

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='4xl'
        motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent h='300px' w='700px'>
          <ModalHeader>
            <h1 className={classes["add-project-title"]}>Edit Skills</h1>
          </ModalHeader>
          <hr style={{ backgroundColor: "#ccc" }} />
          <ModalCloseButton />
          <ModalBody overflow='scroll'>
            <div className={classes["add-project-modal-body"]}>
              <div className={classes["form-group"]}>
                <label htmlFor='city'>Skills</label>
                <Select
                  isMulti
                  name='skills'
                  defaultValue={previousSkills}
                  onChange={setSkills}
                  options={techarray}
                  styles={selectStyles}
                />
              </div>
            </div>
            <ModalFooter>
              <Button
                type='submit'
                colorScheme='blue'
                size='lg'
                onClick={handleSubmit}
                disabled={isUpdateLoading}>
                {isUpdateLoading ? "Loading..." : "Update"}
              </Button>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProfileSkills;
