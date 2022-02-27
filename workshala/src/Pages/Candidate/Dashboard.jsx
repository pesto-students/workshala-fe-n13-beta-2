import * as React from "react";
import {Grid} from "@mui/material";
import TopContent from '../../Components/Dashboard/Candidate/TopContent';
import ProfileInfo from "../../Components/Profile/Candidate/ProfileInfo";
import VacancyStat from "../../charts/Candidate/VacancyStat";
import CandidateLayout from "../../Layouts/CandidateLayout";
import { useDispatch } from 'react-redux';
import {fetchProfile} from '../../redux/actions/user'
import { useSelector} from "react-redux";
import Loader from '../../Services/Utils/Loader'
import { getApplications } from "../../redux/actions/applications";
import { isEmpty } from "../../Services/Utils/Generic";

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
          Object.keys(resp).forEach((key,i) => {
              if(resp[key]['status'] === 'In-Progress') {
                IntSched += 1;
              }
            })
            //prepareChart(resp);
            return {
                    'topTiles': {'Interviews Scheduled': IntSched, 'Applications Sent': resp.length},
                    'vacancyChart': resp
                   }
      }
}

export default function Dashboard() {
    const userInfo = useSelector(state => state.userInfo);
    const applications = useSelector((state) => state.applications);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getApplications());
        dispatch(fetchProfile());
        
    }, []);                     // eslint-disable-line react-hooks/exhaustive-deps

    if(userInfo !== undefined && userInfo.loading ) {
        return (<Loader/>);                   // TODO: use skeleton
    } else {
        let userData = [];
        if(userInfo !== undefined && userInfo.userInfo !== undefined && userInfo.userInfo.status && userInfo.userInfo.data !== undefined 
                && userInfo.userInfo.data.result !== undefined) {
                userData = userInfo.userInfo.data.result[0];
        }
        const AppStats = getAppStats(applications);
        let topTilesData = [];
        let vacancyStatsData = [];
        if(!isEmpty(AppStats)) {
            topTilesData = AppStats['topTiles'];
            vacancyStatsData = AppStats['vacancyChart'];
        }
    return (
        <CandidateLayout>
            <div>
                <Grid container spacing={1}>
                    <Grid item
                        xs={3}
                        sm={3}
                        md={3} width="20%">
                        <ProfileInfo data={userData}/>
                        {/* <RecentActivity/> */}
                    </Grid>
                    <Grid item container md={9} spacing={1}>
                        <Grid item
                            xs={12}
                            sm={12}
                            md={12} >
                            <TopContent data={topTilesData}/>
                        </Grid>
                    
                        <Grid item
                            xs={12}
                            sm={12}
                            md={12}
                            >
                            {/*<RightContent/>*/}
                            <VacancyStat data={vacancyStatsData}/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </CandidateLayout>
    );
    } 
}
