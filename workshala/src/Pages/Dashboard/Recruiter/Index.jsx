import * as React from "react";
import { Grid } from "@mui/material";
import TopContent from "./TopContent";
import ProfileInfo from "../../../Pages/Profile/Candidate/ProfileInfo";
import VacancyStat from "../../../Components/charts/VacancyStat";
import CandidateLayout from "../../../Layouts/CandidateLayout";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../../../redux/actions/user";
import { useSelector } from "react-redux";
import Loader from "../../../Utils/Loader";

export default function Dashboard() {
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProfile());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (userInfo !== undefined && userInfo.loading) {
    return <Loader />; // TODO: use skeleton
  } else {
    let userData = [];
    if (
      userInfo !== undefined &&
      userInfo.userInfo !== undefined &&
      userInfo.userInfo.status &&
      userInfo.userInfo.data !== undefined &&
      userInfo.userInfo.data.result !== undefined
    ) {
      userData = userInfo.userInfo.data.result[0];
    }
    return (
      <CandidateLayout>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={3} sm={3} md={3} width="20%">
              <ProfileInfo data={userData} />
              {/* <RecentActivity/> */}
            </Grid>
            <Grid item container md={9} spacing={1}>
              <Grid item xs={12} sm={12} md={12}>
                <TopContent />
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                {/*<RightContent/>*/}
                <VacancyStat />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </CandidateLayout>
    );
  }
}
