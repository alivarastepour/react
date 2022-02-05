import { Alert, Box, TextField } from "@mui/material";
import React from "react";

const Setup = () => {
  return (
    <>
      <Box component="span">
        <Alert severity="warning">this is a warning</Alert>
        <TextField />
      </Box>
    </>
  );
};
export default Setup;
