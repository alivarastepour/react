import { Breadcrumbs, Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";

const Setup = () => {
  return (
    <>
      <Breadcrumbs separator="->" maxItems={2}>
        <Link
          underline="hover"
          color="inherit"
          href="https://www.google.com"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <HomeIcon />
          main
        </Link>
        <Link underline="hover" color="inherit" href="https://www.google.com">
          login
        </Link>
        <Link
          underline="hover"
          color="text.primaray"
          href="https://www.google.com"
          aria-current="page"
        >
          x
        </Link>
        <Link
          underline="hover"
          color="text.primaray"
          href="https://www.google.com"
          aria-current="page"
        >
          y
        </Link>
        <Link
          underline="hover"
          color="text.primaray"
          href="https://www.google.com"
          aria-current="page"
        >
          z
        </Link>
      </Breadcrumbs>
    </>
  );
};
export default Setup;
