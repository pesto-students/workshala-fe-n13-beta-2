import * as React from "react";
import { Typography, Box, Grid, Drawer } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../Images/logo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import SideBarBack from "../Images/SideBarBack.jpeg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";

import Profile from "../Pages/Profile";
import Statistics from "../Pages/Statistics";
import Jobs from "../Pages/Jobs";
import Applications from "../Pages/Applications";
import ApplyJob from "../Pages/ApplyJob";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 360,
  },
});

const ListItemStyle = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "red",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&$selected:hover": {
      backgroundColor: "purple",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&:hover": {
      backgroundColor: "blue",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
  },
  selected: {
    backgroundColor: "white",
  },
})(ListItem);

const SideMenuItems = [
  {
    title: "Dashboard",
    icon: <HomeOutlinedIcon color="secondary" />,
    to: "/Dashboard",
  },
  {
    title: "Jobs",
    icon: <BusinessCenterOutlinedIcon color="secondary" />,
    to: "/Jobs",
  },
  {
    title: "Applications",
    icon: <AppsOutlinedIcon color="secondary" />,
    to: "/Applications",
  },
  {
    title: "Message",
    icon: <MessageOutlinedIcon color="secondary" />,
    to: "message",
  },
  {
    title: "Statistics",
    icon: <StackedBarChartOutlinedIcon color="secondary" />,
    to: "statistics",
  },
  {
    title: "News",
    icon: <NewspaperOutlinedIcon color="secondary" />,
    to: "news",
  },
];

const styles = (theme) => ({
  drawerPaper: {
    backgroundImage: `url(${SideBarBack})`,
  },
  listItemText: {
    fontSize: "1.7em", // Insert your required size
  },
});

export default function SideBar() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Drawer variant="permanent" anchor="left">
      <Grid
        container
        sx={{
          width: 270,
          height: "100%",
          backgroundColor: "#EDEAEA",
        }}
        alignContent={"start"}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Grid
            container
            sx={{
              mx: 4,
              mt: 2,
            }}
          >
            <Grid item xs={3} sm={3} md={3}>
              <Box
                component="img"
                sx={{
                  height: 70,
                  width: 70,

                  mt: 2,
                  marginRight: 0,
                }}
                alt="Logo"
                src={logo}
              />
            </Grid>
            <Grid item xs={9} sm={9} md={9}>
              <Typography
                component="h1"
                variant="h5"
                color="Black"
                sx={{
                  mt: 4,
                  mx: 1,
                  marginRight: 0,
                }}
              >
                Workshala
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          sx={{
            mt: 3,
            mx: 2,
          }}
          className={classes.root}
        >
          <List
            component="nav"
            aria-label="main menu list"
            sx={{
              p: 3,
              mt: 5,
            }}
          >
            {SideMenuItems.map((item) => (
              <ListItem
                button
                to={item.to}
                key={item.title}
                classes={{ root: useStyles.listItem }}
                selected={selectedIndex === 0}
              >
                <ListItemIcon> {item.icon} </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "22px" }}
                  primary={item.title}
                />
              </ListItem>
            ))}{" "}
          </List>
        </Grid>
      </Grid>
    </Drawer>
  );
}
