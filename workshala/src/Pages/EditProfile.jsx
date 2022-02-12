import React from "react";
import CandidateLayout from "../Layouts/CandidateLayout";
import ProfileDetails from "../Components/Profile/ProfileDetails";
import ProfileInfo from "../Components/Profile/ProfileInfo";
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

export default function EditProfile() {
  return (
    <CandidateLayout>
      <div>
        <Grid container spacing={1}>
          <Grid item md={9} xs={9} sm={9} width={"90%"}>
            <ProfileDetails/>
          </Grid>
          <Grid item xs={3} sm={3} md={3} width={"10%"}>
            <ProfileInfo />
          </Grid>
        </Grid>
      </div>
    </CandidateLayout>
  );
}
