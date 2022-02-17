import * as React from "react";
import {Grid} from "@mui/material";
import TopContent from '../Components/Dashboard/TopContent';
import ProfileInfo from "../Components/Profile/ProfileInfo";
import VacancyStat from "../charts/VacancyStat";
import CandidateLayout from "../Layouts/CandidateLayout";
import RecentActivity from '../Components/Dashboard/RecentActivity'

export default function Dashboard() {
    return (
        <CandidateLayout>
            <div>
                <Grid container spacing={1}>
                    <Grid item
                        xs={3}
                        sm={3}
                        md={3} width="20%">
                        <ProfileInfo/>
                        {/* <RecentActivity/> */}
                    </Grid>
                    <Grid item container md={9} spacing={1}>
                        <Grid item
                            xs={12}
                            sm={12}
                            md={12} >
                            <TopContent/>
                        </Grid>
                    
                        <Grid item
                            xs={12}
                            sm={12}
                            md={12}
                            >
                            {/*<RightContent/>*/}
                            <VacancyStat/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </CandidateLayout>
    );
}
