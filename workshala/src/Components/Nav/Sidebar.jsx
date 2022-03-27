import * as React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Grid, Paper } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../Assets/Images/logo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
import { GetRole } from "../../Utils/Generic";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SideMenuItems = [
  {
    title: "Dashboard",
    icon: <HomeOutlinedIcon color="secondary" />,
    to: "/dashboard",
    click: "",
  },
  {
    title: "Jobs",
    icon: <BusinessCenterOutlinedIcon color="secondary" />,
    to: "/jobs",
    click: "",
  },
  {
    title: "Applications",
    icon: <AppsOutlinedIcon color="secondary" />,
    to: "/applications",
    click: "",
  },
  {
    title: "Statistics",
    icon: <StackedBarChartOutlinedIcon color="secondary" />,
    to: "/statistics",
    click: "",
  },
];

const Title = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "block",
    alignSelf: "center",
  },
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("xs")]: {
    display: "none",
  },
}));

const theme = createTheme();

theme.typography.h6 = {
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.63rem",
  },
};

export default function SideBar() {
  const [selectedIndex] = React.useState(1);

  const role = GetRole();
  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={10}
        sx={{ backgroundColor: "#EDEAEA", height: "100vh" }}
      >
        <Grid
          container
          sx={{
            backgroundColor: "#EDEAEA",
          }}
        >
          <Grid
            item
            container
            lg={12}
            md={12}
            sm={12}
            xs={12}
            justifyContent={"center"}
          >
            {/* Logo */}
            <Grid item lg={5} md={5} sm={6} xs={5} sx={{ mt: 5 }}>
              <Box
                component="img"
                sx={{
                  width: "100%",
                }}
                alt="Logo"
                src={logo}
              />
            </Grid>
            {/* Title */}
            <Title>
              <Grid item lg={12}>
                <Typography component="h1" variant="h5" color="Black">
                  Workshala
                </Typography>
              </Grid>
            </Title>
          </Grid>

          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{
              ml: 1,
              mt: 5,
            }}
          >
            <List component="nav" aria-label="main menu list">
              {SideMenuItems.map((item, i) => (
                <ListItem
                  key={i}
                  button
                  component={Link}
                  to={"/" + role + item.to}
                  selected={selectedIndex === 0}
                  //sx={{ justifyContent: "end" }}
                >
                  <ListItemIcon
                    sx={{ minWidth: { sm: "25px", md: "40px", lg: "50px" } }}
                  >
                    {item.icon}
                  </ListItemIcon>

                  <ListItemText
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                        md: "block",
                        lg: "block",
                      },
                    }}
                    disableTypography
                    primary={
                      <Typography variant="h6" justifyContent="center" sx={{}}>
                        {item.title}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
