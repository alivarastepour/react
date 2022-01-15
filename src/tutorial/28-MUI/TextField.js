import { AccountCircle } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Setup = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          multiline
          label="salama"
          variant="standard"
          error={state}
          InputProps={{
            endAdornment: <InputAdornment position="start">hi</InputAdornment>,
          }}
        />
      </Box>
      <Button onClick={() => setState(!state)}>toggle error</Button>
    </>
  );
};
export default Setup;
