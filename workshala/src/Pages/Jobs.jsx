import React, { Component } from "react";
import CandidateLayout from "../Layouts/CandidateLayout";
import Job from "../Components/Job";
import ProfileInfo from "../Dashboard/ProfileInfo";
import QuickView from "../Components/CompanyQuickView";
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
        <Grid item md={8}>
          {" "}
          <Job />
        </Grid>
        <Grid item md={4}>
          <QuickView wide={"270px"} high={"800px"} />
        </Grid>
      </Grid>
    </CandidateLayout>
  );
}
