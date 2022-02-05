import { Stack } from "@mui/material";
import React from "react";

const Setup = () => {
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        divider={<div>|</div>}
        justifyContent="center"
      >
        <div>hi</div>
        <div>hello</div>
        <div>rock</div>
      </Stack>
    </>
  );
};
export default Setup;
