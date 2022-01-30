import * as React from "react";
import logo from "../Images/logo.png";
import RoleSelectionModal from "./RoleSelectionModel";
import SignInModal from "../Auth/SignInModal"
import {
    Grid,
    Divider,
    Tabs,
    Tab,
    IconButton,
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button
  } from "@mui/material";

export default function Header() {
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
            <Tabs textColor="inherit">
              <Tab label="Home" />
              <Tab label="About" />
              <Tab label="Blog" />
              <Tab label="Contact" />
            </Tabs>
          </Grid>

          <Grid item xs={2} sm={2} md={2}>
            <Button variant="contained" sx={{ borderRadius: 8, my: 3 }}>
              Post a Job
            </Button>
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
            <SignInModal page="home"/>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}