import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { LinearProgress } from "@mui/material";
const Setup = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    const i = setInterval(
      () =>
        setState((prev) => {
          if (prev + 20 <= 100) {
            return prev + 20;
          }
          return 100;
        }),
      1000
    );
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <CircularProgress />
      <br />
      <CircularProgress color="error" variant="determinate" value={state} />
      <br />
      <CircularProgress color="info" />
      <br />
      <CircularProgress color="secondary" />
      <br />
      <CircularProgress color="success" />
      <br />
      <CircularProgress color="warning" />
      <br />
      <LinearProgress />
    </>
  );
};
export default Setup;
