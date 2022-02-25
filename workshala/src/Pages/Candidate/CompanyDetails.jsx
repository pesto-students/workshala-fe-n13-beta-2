import React from "react";
import CandidateLayout from "../../Layouts/CandidateLayout";
import JobDetails from "../../Components/Jobs/Candidate/JobDetails";
import QuickView from "../../Components/Jobs/Candidate/CompanyQuickView";
import {
  Grid
} from "@mui/material";
export default function CompanyDetails() {
  return (
    <CandidateLayout>
      <Grid container>
        <Grid item md={3} >
          <QuickView />
        </Grid>
        <Grid item md={9} >
          <JobDetails />
        </Grid>
      </Grid>
    </CandidateLayout>
  );
}