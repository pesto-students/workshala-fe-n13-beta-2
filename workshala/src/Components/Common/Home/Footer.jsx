import * as React from "react";
import jobs from "../../../Assets/Images/jobs.png";
import manageJobs from "../../../Assets/Images/manageJobs.png";
import expert from "../../../Assets/Images/expert.jpeg";
import career from "../../../Assets/Images/career.jpeg";
import { Grid, Typography, CardContent, Card, Avatar } from "@mui/material";

const footerItems = [
  {
    logo: jobs,
    title: "Search Million of Jobs",
    content:
      "Search Millions of Jobs for free, Its never been so easier to find the job at one place.",
  },
  {
    logo: manageJobs,
    title: "Easy To Manage Jobs",
    content:
      "Its easier to track applied jobs status under one roof, Its never gonna easier than this",
  },
  {
    logo: career,
    title: "Top Carrers",
    content: "Search Top Jobs across different domains under one place",
  },
  {
    logo: expert,
    title: "Search Expert Candidates",
    content:
      "Now recruiters can search for candidates with the expertise and their experience level",
  },
];

const CardTemplate = (props) => {
  return (
    <Card
      sx={{
        p: 3,
        border: 0,
        width: 200,
        height: 225,
      }}
    >
      <CardContent>
        <Avatar
          src={props.logo}
          sx={{
            width: 50,
            height: 50,
          }}
          variant="square"
        />
        <Typography
          variant="h6"
          fontSize={15}
          sx={{
            my: 2,
            width: 200,
          }}
          style={{ fontWeight: 600 }}
        >
          {props.title}{" "}
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontSize: 17,
            color: "gray",
          }}
          align={"justify"}
        >
          {props.content}{" "}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function Footer() {
  return (
    <Grid container alignItems={"center"} justifyContent={"center"} spacing={1}>
      {footerItems.map((item, i) => (
        <Grid item key={i} md={2.5}>
          <CardTemplate
            logo={item.logo}
            title={item.title}
            content={item.content}
          />
        </Grid>
      ))}{" "}
    </Grid>
  );
}
