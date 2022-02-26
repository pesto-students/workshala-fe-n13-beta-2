import React from "react";
import CandidateLayout from "../../Layouts/CandidateLayout";
import ActiveJob from "../../Components/Jobs/Recruiter/ActiveJob";
import { Grid } from "@mui/material";

export default function ActiveJobs() {

  return (
    <CandidateLayout>
      <Grid container spacing={1}>
        <ActiveJob />
      </Grid>
    </CandidateLayout>
  );
}
