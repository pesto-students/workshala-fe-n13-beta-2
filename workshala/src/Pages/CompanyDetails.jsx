import React from "react";
import CandidateLayout from "../Layouts/CandidateLayout";
import LeftTile from "../Components/Jobs/CompanyDetailsTile";
import JobDetails from "../Components/Jobs/JobDetails";
import {
  Grid
} from "@mui/material";
export default function CompanyDetails() {
  return (
    <CandidateLayout>
      <Grid container>
        <Grid item md={2.8} >
          <LeftTile wide={"100%"} high={"45%"} />
        </Grid>
        <Grid item md={9.2} >
          <JobDetails wide={"95%"} high={"90%"} />
        </Grid>
      </Grid>
    </CandidateLayout>
  );
}
