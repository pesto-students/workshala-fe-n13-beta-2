import React, { Component } from "react";
import CandidateLayout from "../Layouts/CandidateLayout";

import LeftTile from "../Components/Jobs/CompanyDetailsTile";
import ProfileDetails from "../Components/Dashboard/ProfileDetails";
import ProfileInfo from "../Components/Dashboard/ProfileInfo";
import {
  Button,
  Grid,
  Divider,
  Switch,
  Typography,
  TextField,
  Paper,
} from "@mui/material";
export default function EditProfile() {
  return (
    <CandidateLayout width="100%" height="100vh">
      <div>
        <Grid container>
          <Grid item md={8} xs={8} sm={8} sx={{ marginLeft: 0, mt: -2 }}>
            <ProfileDetails wide={"95%"} high={"100%"} />{" "}
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <ProfileInfo
              wide={"270px"}
              high={"500px"}
              sx={{ marginLeft: 0, mt: 0 }}
            />
          </Grid>
        </Grid>
      </div>
    </CandidateLayout>
  );
}
