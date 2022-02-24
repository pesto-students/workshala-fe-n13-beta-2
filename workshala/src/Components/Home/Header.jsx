import * as React from "react";
import logo from "../../Assets/Images/logo.png";
import RoleSelectionModal from "./RoleSelectionModel";
import SignInModal from "../Auth/SignInModal";
import { Link } from "react-router-dom";
import {
    Grid,
    Divider,
    Tabs,
    Tab,
    IconButton,
    AppBar,
    Toolbar,
    Typography,
    Box
  } from "@mui/material";

export default function Header() {
  const [value] = React.useState('one');
  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Grid container>
          <Grid item xs={1} sm={1} md={1}>
            <Box
              component="img"
              sx={{ height: 80, width: 80, mx: 3, my: 2 }}
              alt="Logo"
              src={logo}
            />
          </Grid>
          <Grid item xs={3.5} sm={3.5} md={3.5}>
            <Typography
              component="h1"
              variant="h5"
              color="white"
              sx={{ my: 5 }}
            >
              Workshala
            </Typography>
          </Grid>

          <Grid item xs={3.3} sm={3.3} md={3.3}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            ></IconButton>
            <Box flexGrow={1} />
            <Tabs value={value} textColor="inherit">
              <Tab label="Home" to="/" value="one"/>
              <Tab label="About" component={Link} to="/aboutUs" value="two"/>
              <Tab label="Blog" component={Link} to="/blog" value="three"/>
              <Tab label="Contact" component={Link} to="/contactUs" value="four"/>
            </Tabs>
          </Grid>

          <Grid item xs={2} sm={2} md={2} sx={{p:3}}>
            <SignInModal title="Post a Job" comp="button"/>
          </Grid>
          <Grid item xs={0.5} sm={0.5} md={0.5}>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ height: 50, my: 3, mx: 1 }}
            />
          </Grid>
          <Grid item xs={0.9} sm={0.9} md={0.9} sx={{ my: 3 }}>
            <RoleSelectionModal />
          </Grid>

          <Grid item xs={0.8} sm={0.8} md={0.8}>
            <SignInModal page="home" title="Already a user? Sign In" comp="link"/>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
