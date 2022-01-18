import React from "react";
import Alert from "@mui/material/Alert";

const Setup = () => {
  return (
    <>
      <Alert variant="filled" severity="success">
        <div>i shocked u all succefully!</div>
      </Alert>
      <Alert severity="error">i couldnt shocked u all succefully</Alert>
      <Alert severity="info">i shocked u all succefully</Alert>
    </>
  );
};
export default Setup;
