import React from "react";
import ApplicationDetails from "./ApplicationDetails";
import CandidateLayout from "../../../Layouts/CandidateLayout";
import { Grid } from "@mui/material";

export default function ApplicationAction() {
  return (
    <CandidateLayout>
      <Grid container spacing={1}>
        <ApplicationDetails />
      </Grid>
    </CandidateLayout>
  );
}
