import React from 'react';
import Chart from 'chart.js/auto';
import {Grid, Typography, Paper} from "@mui/material";
import * as moment from "moment";
import {Line} from "react-chartjs-2";
import { isEmpty } from '../../Services/Utils/Generic';

export const updateData = (data) => {

    /* Since we have to plot on basis of months
     * but we don'e have enough data, so currently
     * Plotting minutes wise
     */

    /* Step-1: Create Array of minutes from data, 
     * this would be our label array
     */
    let labels = [];
    Object.keys(data).forEach((key, i) => { 
        const d = data[key]['updatedAt']
        labels[i] = moment(d).minutes();
    })
    console.log(labels);
    
    /* Step-2: Create Data Array for 
     * Applications sent and In-Progress over minutes
     */

    /* In-Progress */
}
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
    if(props.data !== undefined && !isEmpty(props.data)) {
        updateData(props.data)
    }

    return (
        <Paper sx={{ borderRadius: 4, p:3 }}> 
            <Grid container >
                <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="h5" fontSize={18}
                                style={{fontWeight: 600}}>
                        {"Vacancy Stats"} 
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Line   data={data}
                            legend={legend}
                            options={options}/>
                </Grid>
            </Grid>
        </Paper>
    );
}
