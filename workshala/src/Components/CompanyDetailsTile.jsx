import * as React from "react";

import user2 from "../Assets/Images/react.jpg";

import userImage from "../Assets/Images/userImage.png";

import { Grid, Typography, CardContent, Card, Avatar } from "@mui/material";

import IconRa from "../Assets/Images/react.jpg";
import star from "../Assets/Images/star.png";
import officeImage from "../Images/office_image.png";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { VscAdd } from "react-icons/vsc";
import locationIcon from "../Assets/Images/location_icon.png";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
const profileData = {
  Image: user2,
  Name: "ABC Pvt. Ltd.",
  Role: "Home Food Delivery",
  Employees: "100",
  Reviews: "4.9",
  Mobile: "+1-398-976-876",
  Whatsapp: "+1-398-976-876",
  Email: "Doe@gmail.com",
  AboutCompany: "About Company",
  Description:
    "This is about the company . What company does and how many empolyees. This is just gibberish text nothing more than that.",
};

export default function LeftContent(props) {
  return (
    <Card
      sx={{
        mt: -3,
        mx: 3.5,
        border: 0,
        width: props.wide,
        height: props.high,
        borderRadius: 4,
      }}
    >
      <CardMedia
        component="img"
        height="140"
        img="/Images/office_image.png"
        alt="green iguana"
      />

      <Avatar
        src={IconRa}
        sx={{ marginLeft: 12, mt: -2, height: 80, width: 80 }}
      />
      <CardContent>
        <Typography
          variant="h5"
          fontSize={18}
          style={{ fontWeight: 600 }}
          align="center"
        >
          {profileData.Name}{" "}
        </Typography>
        <Typography variant="h5" fontSize={14} align="center">
          {profileData.Role}{" "}
        </Typography>
        <Button
          sx={{ mt: 4, marginLeft: 8, borderRadius: 10 }}
          variant="outlined"
          startIcon={<VscAdd sx={{ height: 5, width: 5 }} />}
        >
          Follow
        </Button>
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={3} sm={3} md={3}>
            <Avatar
              src={userImage}
              sx={{
                width: 30,
                height: 30,
                mt: 2,
              }}
            />
          </Grid>
          <Grid item xs={1} sm={1} md={1} sx={{}}>
            <Typography
              variant="h6"
              fontSize={12}
              sx={{
                mt: 2,
                marginLeft: -3,
              }}
              align="center"
              style={{ fontWeight: 600 }}
            >
              {profileData.Employees}{" "}
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={3} sx={{}}>
            <Avatar
              src={star}
              sx={{
                width: 30,
                height: 30,
                mt: 2,
                marginLeft: 6,
              }}
            />
            <Grid item xs={1} sm={1} md={1} sx={{}}>
              <Typography
                variant="h6"
                fontSize={12}
                sx={{
                  mt: -4,
                  marginLeft: 12,
                }}
                align="center"
                style={{ fontWeight: 600 }}
              >
                {profileData.Reviews}{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={5} sm={5} md={5} sx={{}}>
            <Typography
              variant="h6"
              fontSize={10}
              color="#A69F9F"
              align="left"
              style={{ fontWeight: 600 }}
              sx={{ marginLeft: 5, mt: -1 }}
            >
              {"Employees"}{" "}
            </Typography>
          </Grid>
          <Grid item xs={5} sm={5} md={5} sx={{ mx: 1 }}>
            <Typography
              variant="h6"
              fontSize={10}
              color="#A69F9F"
              sx={{ mx: 5, mt: -1, marginLeft: 8 }}
              align="right"
              style={{ fontWeight: 600 }}
            >
              {"Reviews"}{" "}
            </Typography>
          </Grid>
        </Grid>

        {/* Location of company */}
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={1} sm={1} md={1} sx={{}}>
            <Avatar
              src={locationIcon}
              sx={{
                width: 30,
                height: 30,
                mt: 2,
                marginLeft: 0,
              }}
            />
            <Grid item xs={5} sm={5} md={5} sx={{}}>
              <Typography
                variant="h6"
                fontSize={12}
                sx={{
                  mt: -4,
                  marginLeft: 5,
                }}
                style={{ fontWeight: 600 }}
              >
                {" India"}{" "}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5} sm={5} md={5} sx={{}}>
              <Typography
                variant="h6"
                fontSize={10}
                color="#A69F9F"
                align="left"
                style={{ fontWeight: 600 }}
                sx={{ marginLeft: 5, mt: 0 }}
              >
                {"Location"}{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
