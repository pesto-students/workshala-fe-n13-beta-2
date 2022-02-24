import React from "react";
import CandidateLayout from "../../Layouts/CandidateLayout";
import EditProfileDetails from "../../Components/Profile/Candidate/EditProfileDetails";

import { Grid } from "@mui/material";

export default function EditProfile() {
  return (
    <CandidateLayout>
      <div>
        <Grid container spacing={1}>
          <Grid item md={9} xs={9} sm={9} width={"90%"}>
            <EditProfileDetails />
          </Grid>
          <Grid item xs={3} sm={3} md={3} width={"10%"}>
            {/* <ProfileInfo /> */}
          </Grid>
        </Grid>
      </div>
    </CandidateLayout>
  );
}
