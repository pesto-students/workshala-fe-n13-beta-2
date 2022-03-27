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
import { getApplications } from "../../../redux/actions/applications";
import { isEmpty } from "../../../Utils/Generic";

const getAppStats = (data) => {
  if (
    data !== undefined &&
    data.status &&
    data.applications !== undefined &&
    data.applications.data !== undefined &&
    data.applications.data.result !== undefined
  ) {
    const resp = data.applications.data.result;

    let IntSched = 0;
    Object.keys(resp).forEach((key, i) => {
      if (resp[key]["status"] === "In-Progress") {
        IntSched += 1;
      }
    });
    //prepareChart(resp);
    return {
      topTiles: {
        "Interviews Scheduled": IntSched,
        "Applications Sent": resp.length,
      },
      vacancyChart: resp,
    };
  }
};

export default function Dashboard() {
  const userInfo = useSelector((state) => state.userInfo);
  const applications = useSelector((state) => state.applications);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getApplications());
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
    const AppStats = getAppStats(applications);
    let topTilesData = [];
    let vacancyStatsData = [];
    if (!isEmpty(AppStats)) {
      topTilesData = AppStats["topTiles"];
      vacancyStatsData = AppStats["vacancyChart"];
    }
    return (
      <CandidateLayout>
        <Grid item container spacing={1} sm={12} md={12} lg={12}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TopContent data={topTilesData} />
          </Grid>

          <Grid item container sm={12} md={12} lg={12} spacing={1}>
            <Grid item container sm={3} md={3} lg={3}>
              <ProfileInfo data={userData} />
              {/* <RecentActivity/> */}
            </Grid>
            {/*            <Grid item sm={8.9} md={8.9} lg={8.9}>
              {/* <RightContent/>  */}
            {/*   <VacancyStat data={vacancyStatsData} />
            </Grid>*/}
          </Grid>
        </Grid>
      </CandidateLayout>
    );
  }
}
