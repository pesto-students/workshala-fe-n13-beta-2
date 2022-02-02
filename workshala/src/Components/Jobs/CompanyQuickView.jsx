import * as React from "react";
import user2 from "../../Assets/Images/react.jpg";
import userImage from "../../Assets/Images/userImage.png";
import { Grid, Typography, CardContent, Card, Avatar, Divider, Button } from "@mui/material";
import IconRa from "../../Assets/Images/react.jpg";
import star from "../../Assets/Images/star.png";
import { VscAdd } from "react-icons/vsc";
import locationIcon from "../../Assets/Images/location_icon.png";

const profileData = {
  Image: user2,
  Name: "ABC Pvt. Ltd.",
  Role: "Home Food Delivery",
  Employees: "100 - 120",
  Reviews: "4.9",
  Location: "India",
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
        mt: 1,
        border: 0,
        width: props.wide,
        height: props.high,
        borderRadius: 4,
      }}
    >
      
      <CardContent>
        <Grid container>
          <Grid item align="center" md={12}>
            <Avatar
              src={IconRa}
              sx={{mt:3, height: 80, width: 80}}
            />
          </Grid>
        <Grid item align="center" md={12}>
          <Typography
            variant="h5"
            fontSize={18}
            style={{ fontWeight: 600 }}
            align="center"
          >
          {profileData.Name}
          </Typography>
        </Grid>
        <Grid item align="center" md={12}>
          <Typography variant="h5" fontSize={14} align="center">
            {profileData.Role}
          </Typography>
        </Grid>
        <Grid item align="center" md={12}>
          <Button
            sx={{ mt:2, width:150, height:35, borderRadius:8}}
            variant="outlined"
            startIcon={<VscAdd/>}>
            Follow
          </Button>
        </Grid>

        <Grid item container sx={{ mt: 1 }} md={12}>
          <Grid item xs={3} sm={3} md={2.5}>
            <Avatar
              src={userImage}
              sx={{
                width: 30,
                height: 30,
                mt: 2,
              }}
            />
          </Grid>
          <Grid item container md={3.5} direction="column">
              <Grid item>
                <Typography
                  variant="h6"
                  fontSize={12}
                  sx={{mt:2}}>
                  {profileData.Employees}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  fontSize={10}
                  color="#A69F9F"
                  style={{ fontWeight: 600 }}>
                  {"Employees"}
                </Typography>
              </Grid>
          </Grid>

          <Grid item xs={3} sm={3} md={2.5}>
            <Avatar
              src={star}
              sx={{
                width: 30,
                height: 30,
                mt: 2,
                ml:2
              }}
            />
          </Grid>
          <Grid item container md={3.5} direction="column">
              <Grid item>
                <Typography
                  variant="h6"
                  fontSize={12}
                  sx={{mt:2, ml:2}}>
                  {profileData.Reviews}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  fontSize={10}
                  color="#A69F9F"
                  sx={{ml:2}}
                  style={{ fontWeight: 600 }}>
                  {"Reviews"}
                </Typography>
              </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3} sm={3} md={2.5}>
            <Avatar
              src={locationIcon}
              sx={{
                width: 30,
                height: 30,
                mt: 2,
              }}
            />
          </Grid>
          <Grid item container md={3.5} direction="column">
              <Grid item>
                <Typography
                  variant="h6"
                  fontSize={12}
                  sx={{mt:2}}>
                  {profileData.Location}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  fontSize={10}
                  color="#A69F9F"
                  style={{ fontWeight: 600 }}>
                  {"Location"}
                </Typography>
              </Grid>
          </Grid>

          <Grid item container sx={{mt:3}}>
          <Grid item md={7.5}>
              <Button variant="outlined" size="small">
                More Details
              </Button>
            </Grid>

            <Grid item md={4.5}>
              <Button
                variant="contained"
                size="small"
                sx={{ }}>
                Apply
              </Button>
            </Grid>
          </Grid>
          <Grid item md={12} sx={{ mt: 2 }}>
              {/* Divider line  */}
              <Divider/>
          </Grid>
          <Grid item md={12} sx={{mt:1}}>
            <Typography
              variant="h5"
              fontSize={12}
              style={{ fontWeight: 600 }}>
              {profileData.AboutCompany}
            </Typography>
          </Grid>
          <Grid item md={12} sx={{m:1}}>
            <Typography fontSize={12} color="text.secondary" variant="body2" align="justify">
              {profileData.Description}
            </Typography>
          </Grid>
      </Grid>
      </CardContent>
    </Card>
  );
}
