import * as React from "react";
import SegmentIcon from "@mui/icons-material/Segment";
import ProfileDropdown from "../Layouts/ProfileDropdown";
import { Grid, IconButton, Typography, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils/Generic";
import Loader from "../Utils/Loader";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../redux/actions/user";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

theme.typography.h5 = {
  "@media (min-width:600px)": {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.7rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.6rem",
  },
};

export default function Header({ dashBoardSideNavToggle }) {
  const [data, setData] = useState(null);
  const user = useSelector((state) => state.user);
  const userInfo = useSelector((state) => state.userInfo);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (
      user !== undefined &&
      user.user !== undefined &&
      user.user.data !== undefined
    ) {
      const userData = user.user.data;

      setData({
        Role: userData.role,
      });

      if (isEmpty(userInfo.userInfo)) {
        dispatch(fetchProfile());
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  var profileData = [];

  if (
    data &&
    userInfo !== undefined &&
    userInfo.userInfo !== undefined &&
    userInfo.userInfo.status &&
    userInfo.userInfo.data !== undefined &&
    userInfo.userInfo.data.result !== undefined
  ) {
    const userData = userInfo.userInfo.data.result[0];

    profileData = {
      ...data,
      Name: userData.firstName + " " + userData.lastName,
    };

    return (
      <ThemeProvider theme={theme}>
        <Paper elevation={1} sx={{ backgroundColor: "#EDEAEA" }}>
          <Grid container sx={{ maxHeight: "10vh", mt: 1 }}>
            {/* icon */}
            <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5}>
              <IconButton onClick={dashBoardSideNavToggle}>
                <SegmentIcon />
              </IconButton>
            </Grid>

            <Grid
              item
              container
              justifyContent={"flex-end"}
              lg={11.5}
              md={11.5}
              sm={11}
              xs={10.8}
            >
              <Grid
                item
                container
                direction="column"
                lg={11.2}
                md={11.2}
                sm={11.2}
                xs={11}
                alignContent={"end"}
                sx={{ mt: 1, mb: 1 }}
              >
                {/* Name */}
                <Grid item xs={5} lg={5} md={5} sm={5}>
                  <Typography component="h1" variant="h5" color="black">
                    {profileData.Name}
                  </Typography>
                </Grid>
                {/* Candidate/Recruiter */}
                <Grid item xs={5} lg={5} md={5} sm={5}>
                  <Typography
                    component="h1"
                    variant="h5"
                    color="black"
                    style={{ color: "brown" }}
                  >
                    {profileData.Role}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item lg={0.8} md={0.8} sm={0.8} xs={1}>
                <ProfileDropdown />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    );
  } else {
    return <Loader />;
  }
}
