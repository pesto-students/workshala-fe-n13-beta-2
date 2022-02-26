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
            borderRadius: 4,
            p:3
        }
    }> 
    <Grid container>
        <Grid item
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
            >
            <Doughnut
            
          data={state}
          style={
            {
                maxWidth: 450,
                maxHeight: 250,
                margin:2
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
