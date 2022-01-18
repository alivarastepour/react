import { Button, Tooltip } from "@mui/material";
import React from "react";

const Setup = () => {
  return (
    <>
      <Tooltip title="this is a button" placement="top" arrow followCursor>
        <Button>hello world</Button>
      </Tooltip>
    </>
  );
};
export default Setup;
