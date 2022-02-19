import * as React from "react";
import { BallTriangle } from "react-loader-spinner";
import { Grid } from "@mui/material";

export default function Job() {
  return (
    <Grid container justifyContent={"center"}>
      <BallTriangle color="#00BFFF" height={80} width={80} />
    </Grid>
  );
}
