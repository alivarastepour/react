import { Pagination } from "@mui/material";
import React, { useState } from "react";

const Setup = () => {
  const [state, setState] = useState("");
  return (
    <>
      <Pagination
        siblingCount={1}
        showFirstButton
        showLastButton
        size="large"
        shape="rounded"
        count={30}
        onChange={(e, v) => setState(v)}
        variant="outlined"
        color="error"
      />
      <p>{state}</p>
    </>
  );
};
export default Setup;
