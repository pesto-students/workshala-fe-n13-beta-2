import * as React from "react";

import Header from '../Common/Header';
import SideBar from "../Common/SideBar";

import {Grid} from "@mui/material";

export default function CandidateLayout({children}) {
    return (
        <Grid container
            sx={
                {backgroundColor: "#EDEAEA"}
        }>
            <Grid item
                xs={2.3}
                sm={2.3}
                md={2.3}>
                <SideBar/>
            </Grid>
            <Grid item
                xs={9.7}
                sm={9.7}
                md={9.7}>
                <Grid container>
                    <Grid item
                        xs={12}
                        sm={12}
                        md={12}>
                        <Header/>
                    </Grid>
                    <Grid item
                        xs={12}
                        sm={12}
                        md={12}>
                        {children} </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
