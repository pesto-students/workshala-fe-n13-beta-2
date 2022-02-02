import React, { Component } from "react";
import CandidateLayout from "../Layouts/CandidateLayout";

import LeftTile from "../Components/CompanyDetailsTile";
import JobDetails from "../Components/JobDetails";
import {
  Button,
  Grid,
  Divider,
  Switch,
  Typography,
  TextField,
  Paper,
} from "@mui/material";
export default function CompanyDetails() {
  return (
    <CandidateLayout>
      <Grid container>
        <Grid item md={2} sx={{ marginLeft: -8 }}>
          <LeftTile wide={"300px"} high={"600px"} />{" "}
        </Grid>
        <Grid item md={8} sx={{ marginLeft: 8 }}>
          <JobDetails wide={"1000px"} high={"600px"} />{" "}
        </Grid>
      </Grid>
    </CandidateLayout>
  );
}
