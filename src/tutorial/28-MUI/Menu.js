import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

const Setup = () => {
  const [state, setState] = useState(false);
  const [s1, ss1] = useState(null);
  const handle = (e) => {
    setState(true);
    ss1(e.currentTarget);
  };
  return (
    <>
      <Menu
        id="basic-menu"
        onClose={() => ss1(null)}
        open={state}
        anchorEl={s1}
        MenuListProps={{
          "aria-labelledby": "sa",
        }}
      >
        <MenuItem onClick={() => ss1(null)}>salam</MenuItem>
        <MenuItem onClick={() => ss1(null)}>oi</MenuItem>
        <MenuItem onClick={() => ss1(null)}>what</MenuItem>
        <MenuItem onClick={() => ss1(null)}>shut it</MenuItem>
      </Menu>
      <Button
        aria-controls={state ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={state ? "basic-menu" : undefined}
        id="sa"
        variant="contained"
        onClick={handle}
      >
        open menu
      </Button>
    </>
  );
};
export default Setup;
