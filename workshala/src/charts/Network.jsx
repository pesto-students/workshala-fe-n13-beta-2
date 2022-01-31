import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['Following', 'Followers'],
  datasets: [
    {
      label: 'Network',
      backgroundColor: [
        '#B21F00',
        '#C9DE00'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000'
      ],
      data: [65, 59]
    }
  ]
}

export default function Network(props) {
  
    return (
      
<Paper sx={
    {
        mt: 1,
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
                {"Network"} </Typography>
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
            <Doughnut
            
          data={state}
          style={
            {
                maxWidth: 450,
                maxHeight: 250,
                margin:1
            }
        }
          options={{
            title:{
              display:true,
              text:'Network',
              fontSize:20
            },
            legend:{
              display:true,
              position:'left'
            },
            
            
          }}
        />
        </Grid>
    </Grid>

</Paper>

    );
  }
