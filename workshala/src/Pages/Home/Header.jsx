import * as React from "react";
import logo from "../../Assets/Images/logo.png";
import RoleSelectionModal from "./RoleSelectionModel";
import SignInModal from "../Login/SignIn";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Divider,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("xs")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Title = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export default function Header() {
  const [value] = React.useState("one");
  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Grid container sx={{ p: 1 }}>
          {/* Logo */}
          <Grid item xs={1} sm={1} md={0.8} lg={1}>
            <Box
              component="img"
              alt="Logo"
              src={logo}
              sx={{ maxWidth: "95%" }}
            />
          </Grid>

          {/* Title */}

          <Grid item sm={4} md={2.2} lg={3} alignSelf={"center"}>
            <Title>
              <Typography component="h1" variant="h5" color="coral">
                Workshala
              </Typography>
            </Title>
          </Grid>

          {/* Navbar */}
          <Grid item md={4.3} lg={3.5} alignSelf={"center"}>
            <Root>
              <Tabs value={value} textColor="inherit">
                <Tab label="About" component={Link} to="/aboutUs" value="one" />
                <Tab label="Blog" component={Link} to="/blog" value="two" />
                <Tab
                  label="Contact"
                  component={Link}
                  to="/contactUs"
                  value="three"
                />
              </Tabs>
            </Root>
          </Grid>

          {/* Post Job Button */}
          <Grid
            item
            xs={6}
            sm={2.5}
            md={1.5}
            lg={1.5}
            alignSelf={"center"}
            textAlign={"end"}
          >
            <SignInModal title="Post a Job" comp="button" />
          </Grid>

          {/* Divider */}

          <Grid item sm={0.5} md={0.5} lg={1} alignSelf={"center"}>
            <Title>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ display: "list-item", borderRightWidth: 2 }}
              />
            </Title>
          </Grid>

          {/* Join Now Button */}
          <Grid item xs={5} sm={2} md={1.4} lg={1} alignSelf={"center"}>
            <RoleSelectionModal />
          </Grid>

          {/* Sign In Button */}
          <Grid
            item
            xs={12}
            sm={2}
            md={1.3}
            lg={1}
            alignSelf={"center"}
            textAlign={"end"}
          >
            <SignInModal
              page="home"
              title="Already a user? Sign In"
              comp="link"
            />
          </Grid>

          <Root></Root>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
