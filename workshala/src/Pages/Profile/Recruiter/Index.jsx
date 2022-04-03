import React from "react";
import CandidateLayout from "../../../Layouts/CandidateLayout";
import ProfileDetails from "./ProfileDetail";
import ProfileInfo from "./ProfileInfo";
import { fetchProfile } from "../../../redux/actions/user";
import Loader from "../../../Utils/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";

export default function Profile() {
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProfile());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (userInfo !== undefined && userInfo.loading) {
    return <Loader />; // TODO: use skeleton
  } else {
    if (
      userInfo !== undefined &&
      userInfo.userInfo !== undefined &&
      userInfo.userInfo.status &&
      userInfo.userInfo.data !== undefined &&
      userInfo.userInfo.data.result !== undefined
    ) {
      const userData = userInfo.userInfo.data.result[0];

      return (
        <CandidateLayout>
          <div>
            <Grid container spacing={1}>
              <Grid item md={9} xs={9} sm={9} width={"90%"}>
                <ProfileDetails data={userData} />
              </Grid>
              <Grid item xs={3} sm={3} md={3} width={"10%"}>
                <ProfileInfo data={userData} />
              </Grid>
            </Grid>
          </div>
        </CandidateLayout>
      );
    }
  }
}
