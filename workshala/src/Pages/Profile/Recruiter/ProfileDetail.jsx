import * as React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Paper, Button } from "@mui/material";
import Loader from "../../../Utils/Loader";
import { GetRole } from "../../../Utils/Generic";

const TileHeading = (props) => {
  return (
    <Grid item md={11.5} sx={{ ml: 2, mt: 2 }}>
      <Typography
        variant="h6"
        fontSize={props.size}
        style={{ fontWeight: 600 }}
      >
        {props.heading}
      </Typography>
    </Grid>
  );
};
const AboutMeTile = (props) => {
  const role = GetRole();
  return (
    <Paper sx={{ borderRadius: 4, p: 2 }}>
      <Grid container>
        <Grid item container md={12}>
          <Grid item md={4}>
            <TileHeading heading={props.data.user} size={25} />
          </Grid>
          <Grid item md={7.5} sx={{ textAlign: "end", mt: 3, marginRight: 1 }}>
            <Button
              variant="outlined"
              component={Link}
              to={"/" + role + "/editProfile"}
            >
              Edit Profile
            </Button>
          </Grid>
        </Grid>
        <Grid item container sx={{ p: 2 }} md={12}>
          <Grid item md={12}>
            <Typography
              variant="h6"
              fontSize={16}
              style={{ fontWeight: 600, fontFamily: "Fira Sans" }}
            >
              About Me
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography variant="h6" fontSize={15} align="justify">
              {props.data.AboutMeText}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

const TileRow = (props) => {
  return (
    <Grid item container spacing={4} sx={{ p: 1 }} md={6}>
      <Grid item md={6}>
        <Typography
          variant="h6"
          fontSize={18}
          textAlign={"end"}
          style={{ fontFamily: "Fira Sans", fontWeight: 550 }}
        >
          {props.left}
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Typography
          variant="h6"
          fontSize={18}
          textAlign={"start"}
          style={{ fontFamily: "Fira Sans" }}
        >
          {props.right}
        </Typography>
      </Grid>
    </Grid>
  );
};

const TileTemplate = (props) => {
  return (
    <Paper sx={{ borderRadius: 4, p: 2 }}>
      <TileHeading heading={props.heading} size={20} />

      <Grid item container md={11}>
        {props.data.map((item, i) => (
          <TileRow left={item.title} right={item.val} key={i} />
        ))}
      </Grid>
    </Paper>
  );
};

export default function ProfileDetails(props) {
  if (props.data !== undefined) {
    const userData = props.data;

    const AboutMeData = {
      user: userData.firstName + " " + userData.lastName,
      AboutMeText: userData.about,
    };

    const ContactData = [
      { title: "Mobile", val: userData.mobile },
      { title: "Email", val: userData.email },
      { title: "Address", val: userData.address },
      { title: "City", val: userData.city },
      { title: "Country", val: userData.country },
      { title: "PinCode", val: userData.pin },
    ];

    return (
      <Grid container spacing={1}>
        <Grid item md={12}>
          <AboutMeTile data={AboutMeData} />
        </Grid>
        <Grid item md={12}>
          <TileTemplate data={ContactData} heading="Contact" />
        </Grid>
      </Grid>
    );
  } else {
    return <Loader />;
  }
}
