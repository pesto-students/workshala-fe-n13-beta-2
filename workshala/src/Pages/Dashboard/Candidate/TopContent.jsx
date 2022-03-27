import * as React from "react";
import { Work, AppsOutlined } from "@mui/icons-material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import { Grid, Typography, CardContent, Card } from "@mui/material";
import { blue } from "@mui/material/colors";

const Icon = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Tile = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    height: "18px",
    //fontSize: "0.6rem",
  },
  [theme.breakpoints.down("sm")]: {
    height: "5px",
    //fontSize: "0.6rem",
  },
}));

const tileItems = [
  {
    logo: <Work style={{ fontSize: 25 }} />,
    title: "Interviews Scheduled",
    content: "19",
  },
  {
    logo: <AppsOutlined style={{ fontSize: 25 }} />,
    title: "Applications Sent",
    content: "51",
  },
  {
    logo: <AppsOutlined style={{ fontSize: 25 }} />,
    title: "Applications On-Hold",
    content: "5",
  },
  {
    logo: <AppsOutlined style={{ fontSize: 25 }} />,
    title: "Applications Rejected",
    content: "5",
  },
];
const theme = createTheme();

theme.typography.h6 = {
  "@media (min-width:600px)": {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.6rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.55rem",
  },
};

const CardTemplate = (props) => {
  const AnalyticsData = props.data;
  let content = "";
  if (AnalyticsData !== undefined) {
    content = AnalyticsData[props.title];
  }
  return (
    <ThemeProvider theme={theme}>
      <Card
        style={{
          backgroundColor: "#88B3F4",
        }}
        sx={{
          color: blue,
          borderRadius: 4,
        }}
      >
        <CardContent>
          <Grid container>
            <Grid
              item
              container
              xs={10.2}
              sm={10.2}
              md={9.8}
              lg={10}
              spacing={1}
            >
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Tile>
                  <Typography color={"white"} align={"left"} variant="h6">
                    {props.title}
                  </Typography>
                </Tile>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Tile>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "blue",
                    }}
                    align={"left"}
                  >
                    {content}
                  </Typography>
                </Tile>
              </Grid>
            </Grid>

            <Grid item xs={0.8} sm={0.8} md={1.2} lg={1}>
              {/* <Icon> */}
              {props.logo}
              {/* </Icon> */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default function TopContent(props) {
  return (
    <Grid container spacing={1} alignItems={"center"} justifyContent={"center"}>
      {tileItems.map((item, i) => (
        <Grid item key={i} md={3} lg={3} sm={3} xs={6}>
          <CardTemplate
            logo={item.logo}
            title={item.title}
            content={item.content}
            data={props.data}
          />
        </Grid>
      ))}
    </Grid>
  );
}
