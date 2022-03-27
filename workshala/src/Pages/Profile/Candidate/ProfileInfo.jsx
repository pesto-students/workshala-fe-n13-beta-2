import * as React from "react";
import whatsapp from "../../../Assets/Images/whatsapp.png";
import Phone_icon from "../../../Assets/Images/Phone_icon.png";
import email from "../../../Assets/Images/email.png";
import dev from "../../../Assets/Images/dev.png";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import {
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Avatar,
} from "@mui/material";

// Default data
let profileData = {
  Image: dev,
  Name: "Jean Tow",
  Profile: "Recruiter",
  Followers: 5962,
  Following: 228,
  Mobile: "+1-398-976-876",
  Whatsapp: "+1-398-976-876",
  Email: "Tow@gmail.com",
};

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

theme.typography.h5 = {
  "@media (min-width:600px)": {
    fontSize: "1.0rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.7rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.6rem",
  },
};

theme.Avatar = {
  [theme.breakpoints.down("md")]: {
    width: 10,
  },
};

export default function ProfileInfo(props) {
  if (props.data !== undefined) {
    profileData = {
      Name: props.data.firstName + " " + props.data.lastName,
      Email: props.data.email ? props.data.email : "Not Available",
      Profile: props.data.profile ? props.data.profile : "Not Available",
      Followers: props.data.followers ? props.data.followers : "0",
      Following: props.data.following ? props.data.following : "0",
      Mobile: props.data.mobile ? props.data.mobile : "Not Available",
      Whatsapp: props.data.mobile ? props.data.mobile : "Not Available",
      Image:
        props.data !== undefined && props.data.profileImg !== undefined
          ? props.data.profileImg.url
          : dev,
    };
  }

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ borderRadius: 4, width: "100%" }}>
        <CardMedia
          height="35%"
          component="img"
          image={profileData.Image}
          alt="User Profile Image"
        />
        <CardContent>
          <Typography variant="h5" style={{ fontWeight: 600 }} align="center">
            {profileData.Name}
          </Typography>
          <Typography variant="h5" align="center">
            {profileData.Profile}
          </Typography>

          <Grid container textAlign={"center"} sx={{ mt: 3 }}>
            <Grid item container direction="column" md={6} lg={6}>
              <Grid item md={6} lg={6}>
                <Typography variant="h6" style={{ fontWeight: 600 }}>
                  {profileData.Followers}
                </Typography>
              </Grid>
              <Grid item md={6} lg={6}>
                <Typography
                  variant="h6"
                  color="#A69F9F"
                  style={{ fontWeight: 600 }}
                >
                  {"Followers"}
                </Typography>
              </Grid>
            </Grid>

            <Grid item container direction="column" md={6} lg={6}>
              <Grid item md={6} lg={6}>
                <Typography variant="h6" style={{ fontWeight: 600 }}>
                  {profileData.Following}
                </Typography>
              </Grid>
              <Grid item md={6} lg={6}>
                <Typography
                  variant="h6"
                  color="#A69F9F"
                  style={{ fontWeight: 600 }}
                >
                  {"Following"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container sx={{ mt: 3 }} spacing={1}>
            <Grid item container>
              <Grid item xs={3} sm={3} md={3} lg={3}>
                <Avatar
                  src={Phone_icon}
                  sx={{
                    width: { sm: 15, md: 30, lg: 30 },
                    height: { sm: 15, md: 30, lg: 30 },
                  }}
                />
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={9} alignSelf={"center"}>
                <Typography variant="h6">{profileData.Mobile}</Typography>
              </Grid>
            </Grid>

            <Grid item container>
              <Grid item xs={3} sm={3} md={3} lg={3}>
                <Avatar
                  src={whatsapp}
                  sx={{
                    width: { sm: 15, md: 30, lg: 30 },
                    height: { sm: 15, md: 30, lg: 30 },
                  }}
                />
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={9} alignSelf={"center"}>
                <Typography variant="h6">{profileData.Whatsapp}</Typography>
              </Grid>
            </Grid>

            <Grid item container>
              <Grid item xs={3} sm={3} md={3} lg={3}>
                <Avatar
                  src={email}
                  sx={{
                    width: { sm: 15, md: 30, lg: 30 },
                    height: { sm: 15, md: 30, lg: 30 },
                  }}
                />
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={9} alignSelf={"center"}>
                <Typography variant="h6" sx={{ overflowWrap: "break-word" }}>
                  {profileData.Email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
