import React from "react";
import CandidateLayout from "../Layouts/CandidateLayout";
import ProfileDetails from "../Components/Profile/ProfileDetails";
import ProfileInfo from "../Components/Profile/ProfileInfo";

import { useDispatch, useSelector } from "react-redux";

import LeftTile from "../Components/Jobs/CompanyDetailsTile";

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
    <CandidateLayout>
      <div>
        <Grid container spacing={1}>
          <Grid item md={9} xs={9} sm={9} width={"90%"}>
            <ProfileDetails />
          </Grid>
          <Grid item xs={3} sm={3} md={3} width={"10%"}>
            <ProfileInfo />
          </Grid>
        </Grid>
      </div>
    </CandidateLayout>
  );
}
