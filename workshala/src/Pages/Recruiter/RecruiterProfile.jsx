import React from "react";
import CandidateLayout from "../../Layouts/CandidateLayout";
import RecruiterProfileDetail from "../../Components/Profile/Recruiter/RecruiterProfileDetail";
import RecruiterProfileInfo from "../../Components/RecruiterProfile/RecruiterProfileInfo";

import { useDispatch, useSelector } from "react-redux";

import { Grid } from "@mui/material";

export default function RecruiterProfile() {
  return (
    <CandidateLayout>
      <div>
        <Grid container spacing={1}>
          <Grid item md={9} xs={9} sm={9} width={"90%"}>
            <RecruiterProfileDetail />
          </Grid>
          <Grid item xs={3} sm={3} md={3} width={"10%"}>
            <RecruiterProfileInfo />
          </Grid>
        </Grid>
      </div>
    </CandidateLayout>
  );
}
