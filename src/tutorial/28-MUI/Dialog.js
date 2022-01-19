import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContent } from "@mui/material";
import { DialogContentText } from "@mui/material";
import { DialogActions } from "@mui/material";
import { Button } from "@mui/material";

const Setup = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>hello! i am a dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to close dialoge ?
          </DialogContentText>
          <DialogActions>
            <Button variant="text" onClick={() => setOpen(false)}>
              Yes
            </Button>
            <Button variant="contained">No</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Button variant="contained" onClick={() => setOpen(true)}>
        click me to open dialog
      </Button>
    </>
  );
};
export default Setup;
