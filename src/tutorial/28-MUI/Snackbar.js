import { Button, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";

const Setup = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert
          variant="filled"
          severity="success"
          onClose={() => setOpen(false)}
          sx={{ width: "1000px" }}
        >
          it was succesful
        </Alert>
      </Snackbar>
      <Button onClick={() => setOpen(true)}>open me</Button>
    </>
  );
};
export default Setup;
