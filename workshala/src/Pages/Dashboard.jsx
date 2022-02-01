import * as React from "react";
import {Grid} from "@mui/material";
import TopContent from '../Dashboard/TopContent';
import ProfileInfo from "../Dashboard/ProfileInfo";
import VacancyStat from "../charts/VacancyStat";
import CandidateLayout from "../Layouts/CandidateLayout";
import RecentActivity from '../Dashboard/RecentActivity'

export default function Dashboard() {
    return (
        <CandidateLayout>
            <div>
                <Grid container>
                    <Grid item
                        xs={12}
                        sm={12}
                        md={12}>
                        <TopContent/>
                    </Grid>
                    <Grid item
                        xs={3}
                        sm={3}
                        md={3}>
                        <ProfileInfo wide={"270px"} high={"500px"}/>
                        <RecentActivity/>
                    </Grid>
                    <Grid item
                        xs={9}
                        sm={9}
                        md={9}>
                        {/*<RightContent/>*/}
                        <VacancyStat wide={"820px"} high={"500px"}/>
                    </Grid>
                </Grid>
            </div>
        </CandidateLayout>
    );
}
