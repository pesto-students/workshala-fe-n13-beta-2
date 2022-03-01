import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Paper, Grid, Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Vacancies",
      data: [65, 59, 80, 81, 56],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Hired",
      data: [15, 25, 18, 11, 29],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function JobTrends(props) {
  return (
    <Paper
      sx={{
        borderRadius: 4,
        p: 3,
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h5" fontSize={18} style={{ fontWeight: 600 }}>
            {"Job Trends"}{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}></Grid>
        <Bar
          options={options}
          data={data}
          style={{
            maxWidth: 490,
            maxHeight: 250,
          }}
        />
      </Grid>
    </Paper>
  );
}
