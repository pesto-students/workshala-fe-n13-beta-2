import React from 'react';
import Chart from 'chart.js/auto';
import {
    Grid,
    Typography,
    Paper
} from "@mui/material";

import {Line} from "react-chartjs-2";

const data = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun"
    ],
    datasets: [
        {
            label: "Applications Sent",
            data: [
                33,
                53,
                85,
                41,
                44,
                65
            ],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            lineTension: 0.3
        }, {
            label: "Interviews",
            data: [
                33,
                25,
                35,
                51,
                54,
                76
            ],
            fill: false,
            borderColor: "#742774",
            lineTension: 0.3
        }
    ]
};

const legend = {
    display: true,
    position: "bottom",
    labels: {
        fontColor: "#323130",
        fontSize: 14
    }
};

const options = {
    title: {
        display: true,
        text: "Vacancy Stat"
    },
    responsive: true
};

export default function VacancyStat(props) {
    return (

        <Paper sx={
            {
                mt: 1,
                mx: 2.5,
                border: 0,
                width: props.wide,
                height: props.high,
                borderRadius: 4

            }
        }>
            <Grid container>
                <Grid item
                    sx={
                        {
                            marginTop: 3,
                            marginLeft: 3
                        }
                    }
                    xs={12}
                    sm={12}
                    md={12}>
                    <Typography variant="h5"
                        fontSize={18}
                        style={
                            {fontWeight: 600}
                    }>
                        {"Vacancy Stats"} </Typography>
                </Grid>
                <Grid item
                    xs={12}
                    sm={12}
                    md={12}
                    sx={
                        {
                            marginLeft: 5,
                            marginTop: 2,
                            marginBottom: 2
                        }
                }>
                    <Line data={data}
                        legend={legend}
                        options={options}
                        style={
                            {
                                maxWidth: 450,
                                maxHeight: 250,
                                margin:3
                            }
                        }/>
                </Grid>
            </Grid>

        </Paper>
    );
}
