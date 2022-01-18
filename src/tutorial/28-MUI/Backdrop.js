import React, { useState } from "react";
import { Backdrop, Button, CircularProgress } from "@mui/material";
const Setup = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>click me</Button>
      <Backdrop open={open} onClick={() => setOpen(false)}>
        <CircularProgress color="primary" />
      </Backdrop>
    </>
  );
};
export default Setup;
