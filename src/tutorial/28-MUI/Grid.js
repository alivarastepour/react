import { Grid } from "@mui/material";
import React from "react";

const Setup = () => {
  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={10}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={3}>
          <div>hello</div>
        </Grid>
        <Grid item xs={3}>
          <div>hello</div>
        </Grid>
        <Grid item xs={3}>
          <div>hello</div>
        </Grid>
        <Grid item xs={3}>
          <div>hello</div>
        </Grid>
        <Grid item xs={9}>
          <div>hello</div>
        </Grid>
        <Grid item xs={3}>
          <div>hello</div>
        </Grid>
      </Grid>
    </>
  );
};
export default Setup;
