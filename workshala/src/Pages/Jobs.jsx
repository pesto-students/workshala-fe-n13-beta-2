import React, { Component } from "react";
import CandidateLayout from "../Layouts/CandidateLayout";
import Job from "../Components/Jobs/Job";
import ProfileInfo from "../Components/Dashboard/ProfileInfo";
import QuickView from "../Components/Jobs/CompanyQuickView";
import {
  Button,
  Grid,
  Divider,
  Switch,
  Typography,
  TextField,
  Paper,
} from "@mui/material";
export default function Jobs() {
  return (
    <CandidateLayout>
      <Grid container>
        <Grid item md={9}>
          <Job />
        </Grid>
        <Grid item md={3}>
          <QuickView wide={"230px"} high={"800px"} />
        </Grid>
      </Grid>
    </CandidateLayout>
  );
}
