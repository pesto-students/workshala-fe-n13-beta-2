import * as React from "react";
import { Grid, Typography, CardContent, Card } from "@mui/material";
import VacancyStat from "../../charts/Candidate/VacancyStat";
import JobTrends from "../../charts/Candidate/JobTrends";
import Network from "../../charts/Candidate/Network";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const CardTemplate = (props) => {
  return (
    <Card style={{ backgroundColor: "#ffffff" }} sx={{ borderRadius: 8 }}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Typography
              fontSize={15}
              style={{ fontWeight: 550, width: 200 }}
              color={"black"}
              sx={{ ml: 1, mt: 1 }}
              align={"left"}
            >
              {props.title}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography
              sx={{ fontSize: 25, color: "Black", ml: 1, mt: 0.5 }}
              align={"left"}
            >
              {props.content}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={12} sx={{ textAlign: "right", mr: 3 }}>
            {props.logo}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default function Stats(props) {
  return (
    <Grid container spacing={1}>
      <Grid item md={6}>
        {/* Job Trends - Bar Graph */}
        <JobTrends />
      </Grid>
      <Grid item container md={3} spacing={1}>
        <Grid item>
          <CardTemplate
            title="Profile Viewed"
            content="3952"
            logo={
              <InterpreterModeIcon style={{ fontSize: 40, color: "blue" }} />
            }
          />
        </Grid>
        <Grid item>
          <CardTemplate
            title="Applications Sent"
            content="952"
            logo={
              <ForwardToInboxIcon style={{ fontSize: 40, color: "blue" }} />
            }
          />
        </Grid>
      </Grid>
      <Grid item container md={3} spacing={1}>
        <Grid item>
          {/* Applications answered */}
          <CardTemplate
            title="Applications answered"
            content="552"
            logo={<PhoneInTalkIcon style={{ fontSize: 40, color: "blue" }} />}
          />
        </Grid>
        <Grid item>
          {/* Interviewed */}
          <CardTemplate
            title="Interviewed"
            content="552"
            logo={
              <ConnectWithoutContactIcon
                style={{ fontSize: 40, color: "blue" }}
              />
            }
          />
        </Grid>
      </Grid>
      <Grid item md={6}>
        <VacancyStat />
      </Grid>
      <Grid item md={6}>
        {/* Network */}
        <Network />
      </Grid>
    </Grid>
  );
}
