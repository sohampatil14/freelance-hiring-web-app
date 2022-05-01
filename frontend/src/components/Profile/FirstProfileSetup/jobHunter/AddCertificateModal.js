import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import classes from "./JobHunterUpdate.module.css";
import { useAlert } from "react-alert";

const AddCertificateModal = ({ addCertificates, certificates, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const alert = useAlert();

  const [photo, setPhoto] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");

  const handleImage = (e) => {
    if (e.target.files[0] && !e.target.files[0].type.startsWith("image")) {
      return alert.error("Only images are allowed");
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setPhotoPreview(reader.result);
        setPhoto(reader.result);
      }
    };

    console.log(photoPreview);
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
  };

  const onChange = (e) => {
    if (e.target.name === "photo") {
      handleImage(e);
    }
  };

  const resetData = () => {
    setPhotoPreview("");
    setPhoto("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!photo) return alert.error("Photo is required");

    addCertificates(photo);
    onClose();
    resetData();
  };

  const openModal = () => {
    if (certificates.length === 3) {
      return alert.show("Currently, use can add only upto 3 certificates");
    }

    onOpen();
  };

  return (
    <>
      {children ? <span onClick={openModal}>{children}</span> : <></>}

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
        motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h1 className={classes["add-project-title"]}>Add Certificates</h1>
          </ModalHeader>
          <hr style={{ backgroundColor: "#ccc" }} />
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={submitHandler} style={{ alignItems: "center" }}>
              <div className={classes["certificate-container"]}>
                <label
                  htmlFor='photo'
                  style={{ width: "250px", height: "250px" }}>
                  <input
                    name='photo'
                    type='file'
                    id='photo'
                    style={{ display: "none" }}
                    onChange={onChange}
                    accept='image/*'
                  />
                  <div
                    className={classes["profile-image"]}
                    style={{ width: "250px", height: "250px" }}>
                    {photoPreview ? (
                      <img src={photoPreview} alt='avatar' />
                    ) : (
                      <p>Add Certificate +</p>
                    )}
                  </div>
                </label>
              </div>
              <Button type='submit' colorScheme='blue' size='lg'>
                Submit
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddCertificateModal;
