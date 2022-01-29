import * as React from "react";
import DashHead from '../Common/Header';
import {makeStyles} from '@mui/styles';
import {Typography, Box, Grid, Drawer} from "@mui/material";
import Body from '../Dashboard/Body';
import SideBarBack from '../Images/SideBarBack.jpeg'

import SideBar from "../Common/SideBar";
const useStyles = makeStyles({
    drawer: {
        width: 10
    },
    root: {
        display: 'flex'
    }
});
const myStyle = {
    backgroundImage: `url(${SideBarBack})`,
    backgroundSize: "cover",
    height: "490px",
    display: "flex",
    margin: -8

};

export default function Dashboard() {
    return (
        <Grid container
            sx={
                {backgroundColor: "#EDEAEA"}
        }>
            <Grid item
                xs={2.3}
                sm={2.3}
                md={2.3}>
                <SideBar style={myStyle}/>
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
                        <DashHead/>
                    </Grid>
                    <Grid item
                        xs={12}
                        sm={12}
                        md={12}>
                        <Body/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
