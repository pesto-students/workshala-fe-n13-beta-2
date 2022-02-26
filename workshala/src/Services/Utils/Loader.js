import * as React from "react";
import { BallTriangle } from "react-loader-spinner";
import { Grid, Skeleton } from "@mui/material";

export default function Job() {
  return (
    <Grid container justifyContent={"center"}>
      <Skeleton />
    </Grid>
  );
}
