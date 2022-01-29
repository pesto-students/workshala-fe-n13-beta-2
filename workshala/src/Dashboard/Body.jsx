import * as React from "react";
import {Typography, Box, Grid, Drawer} from "@mui/material";
import TopContent from './TopContent';
import LeftContent from "./LeftContent";
import VacancyStat from "../charts/VacancyStat";

export default function Body() {
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12}>
                <TopContent/>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
               <LeftContent/>
            </Grid>
            <Grid item xs={9} sm={9} md={9}>
                {/*<RightContent/>*/}
                <VacancyStat/>
            </Grid>
        </Grid>
    );
}