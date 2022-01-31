import * as React from "react";
import {
    Grid,
    Typography,
    CardContent,
    Card
} from "@mui/material";
import VacancyStat from "../charts/VacancyStat";
import JobTrends from "../charts/JobTrends";
import Network from "../charts/Network";

const CardTemplate = (props) => {
    return (
        <Card style={
                {backgroundColor: "#ffffff"}
            }
            sx={
                {
                    mt: 1,
                    width: 270,
                    height: 155,
                    borderRadius: 8
                }
        }>
            <CardContent>
                <Grid container >
                    <Grid item 
                        xs={10}
                        sm={10}
                        md={9}
                    >
                        <Grid container>
                            <Grid item
                                xs={12}
                                sm={12}
                                md={12}>
                                <Typography fontSize={15}
                                style={{fontWeight:550, width:200}}
                                    color={"black"}
                                    sx={
                                        {marginLeft: 2.5, mt:1}
                                    }
                                    align={"left"}>

                                    {
                                    props.title
                                } </Typography>
                            </Grid>
                            <Grid item
                                xs={12}
                                sm={12}
                                md={12}>
                                <Typography 
                                    
                                    sx={
                                        {
                                            fontSize: 25,
                                            color: "Black",
                                            mx: 2.5
                                        }
                                    }
                                    align={"left"}>
                                    {
                                    props.content
                                } </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item
                        xs={2}
                        sm={2}
                        md={2}
                        sx={
                            {mt: 2}
                    }>
                        {
                        props.logo
                    } </Grid>
                </Grid>

            </CardContent>
        </Card>
    );
};

export default function Stats(props) {
    return (
        <Grid container>
            <Grid item
                md={12}></Grid>
            <Grid container >
                <Grid item
                    md={6}>
                    {/* Job Trends - Bar Graph */}
                    <JobTrends wide="500px" high="270px"/>
                </Grid>
                <Grid item
                    md={6}>
                    <Grid container
                        md={12}>
                        <Grid item
                            md={5.8}>
                            <CardTemplate title="Profile Viewed" content="3952"/>
                        </Grid>
                        <Grid item
                            md={6}>
                            <CardTemplate title="Applications Sent" content="952"/>
                        </Grid>
                    </Grid>
                    <Grid container
                        md={12}>
                        <Grid item
                            md={5.8}>
                            {/* Applications answered */}
                            <CardTemplate title="Applications answered" content="552"/>
                        </Grid>
                        <Grid item
                            md={6}>
                            {/* Interviewed */}
                            <CardTemplate title="Interviewed" content="552"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item
                md={12}>
                <Grid container>
                    <Grid item
                        md={6}>
                        <VacancyStat wide="550px" high="350px"/>
                    </Grid>
                    <Grid item
                        md={6}>
                        {/* Network */}
                        <Network wide="550px" high="350px"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
