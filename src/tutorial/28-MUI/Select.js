import React, { useState } from "react";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl, InputLabel } from "@mui/material";

const Setup = () => {
  const [state, setState] = useState(2);
  return (
    <>
      <FormControl>
        <InputLabel>چن سالدس عمو؟</InputLabel>
        <Select
          placeholder="salamp"
          variant="standard"
          sx={{ width: 300 }}
          label="salam"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
export default Setup;
