import React from "react";
import CandidateLayout from "../../../Layouts/CandidateLayout";
import JobDetails from "./JobDetails";
import QuickView from "./CompanyQuickView";
import { Grid } from "@mui/material";

let updatedData = [];
export const FetchedData = (data) => {
  updatedData = data;
};
export default function CompanyDetails() {
  return (
    <CandidateLayout>
      <Grid container>
        <Grid item md={3}>
          <QuickView data={updatedData} />
        </Grid>
        <Grid item md={9}>
          <JobDetails data={updatedData} />
        </Grid>
      </Grid>
    </CandidateLayout>
  );
}
