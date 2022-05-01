import { Spinner } from "@chakra-ui/react";
import React from "react";

const styles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const LoadingSpinner = () => {
  return (
    <div style={styles}>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        height='50px'
        width='50px'
      />
    </div>
  );
};

export default LoadingSpinner;
