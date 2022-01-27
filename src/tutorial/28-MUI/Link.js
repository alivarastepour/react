import { Link } from "@mui/material";
import React from "react";

const Setup = () => {
  return (
    <>
      <Link
        rel="noopener"
        color="inherit"
        href="https://www.google.com"
        target="_blank"
      >
        salam
      </Link>
      <br />
      <Link underline="hover" href="https://www.google.com" target="_self">
        oi
      </Link>
      <br />

      <Link href="https://www.google.com" target="_parent">
        io
      </Link>
      <br />

      <Link href="https://www.google.com" target="_top">
        ?
      </Link>
    </>
  );
};
export default Setup;
