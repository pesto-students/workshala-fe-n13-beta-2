import * as React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, Paper } from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

/*
 * Data used in Body
 */
var AboutMeData = {
  user: "Jean Tow",
  AboutMeText:
    "The lines are random and randomly typed the lines are random and randomly typed the lines are random and randomly typed randomly typed the lines are random and randomly typed the lines are random and randomly typed randomly typed the lines are random and randomly typed the lines are random and randomly typed randomly typed the lines are random and randomly typed the lines are random.",
};
var BasicData = [
  { title: "Age", val: "18" },
  { title: "From", val: "Hyderabad" },
  { title: "Date of Birth", val: "20/12/2003" },
  { title: "Gender", val: "Male" },
  { title: "Role", val: "Mechanic" },
  { title: "Password", val: "*****" },
];

var ContactData = [
  { title: "Mobile", val: "+1-398-976-876" },
  { title: "Email", val: "Doe@gmail.com" },
  { title: "Address", val: "ABC Street" },
  { title: "City", val: "NYC" },
  { title: "Country", val: "United States" },
  { title: "PinCode", val: "110 011" },
];

const TileHeading = (props) => {
  return (
    <Grid container sx={{ p: 2 }}>
      <Grid item md={11.5}>
        <Typography
          variant="h6"
          fontSize={props.size}
          style={{ fontWeight: 600 }}
        >
          {props.heading}
        </Typography>
      </Grid>
      <Grid item md={0.5} justifyContent={"flex-end"}>
        <MoreVertIcon />
      </Grid>
    </Grid>
  );
};
const AboutMeTile = () => {
  return (
    <Paper sx={{ borderRadius: 4 }}>
      <Grid container>
        <TileHeading heading={AboutMeData.user} size={30} />
        <Grid item container sx={{ p: 3 }} md={12}>
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
              {AboutMeData.AboutMeText}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

const TileRow = (props) => {
  return (
    <Grid item container spacing={4} sx={{ p: 1 }}>
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
      {/*   <Grid item md={6}>
          <TextField
            margin="normal"
            required
            disabled
            style = {{width: 100}}
            id={props.right}
            label={props.right}
            name={props.right}
            autoComplete={props.right}
            variant="standard"
          />
    </Grid>*/}
    </Grid>
  );
};

const TileTemplate = (props) => {
  return (
    <Paper sx={{ borderRadius: 4 }}>
      <TileHeading heading={props.heading} size={20} />

      <Grid item container md={12}>
        {props.data.map((item, i) => (
          <TileRow left={item.title} right={item.val} key={i} />
        ))}
      </Grid>
    </Paper>
  );
};

const UpdateData = (userData) => {
  AboutMeData = {
    ...AboutMeData,
    user: userData.firstName + " " + userData.lastName,
    AboutMeText: userData.bio,
  };

  BasicData = [
    { title: "Age", val: userData.age },
    { title: "From", val: userData.city },
    { title: "Date of Birth", val: "dob" },
    { title: "Gender", val: userData.gender },
    { title: "Profile", val: userData.profile },
    { title: "Password", val: "*****" },
  ];

  ContactData = [
    { title: "Mobile", val: userData.mobile },
    { title: "Email", val: userData.email },
    { title: "Address", val: userData.address },
    { title: "City", val: userData.city },
    { title: "Country", val: userData.country },
    { title: "PinCode", val: userData.pin },
  ];
};

export default function RecruiterProfileDetail(props) {
  const userInfo = useSelector((state) => state.userInfo.userInfo);

  if (
    userInfo !== undefined &&
    userInfo.status &&
    userInfo.data !== undefined &&
    userInfo.data.result !== undefined
  ) {
    const userData = userInfo.data.result[0];
    UpdateData(userData);
  }

  return (
    <Grid container spacing={1}>
      <Grid item md={12}>
        <AboutMeTile />
      </Grid>

      <Grid item container spacing={1}>
        <Grid item container md={6}>
          <TileTemplate data={BasicData} heading="Basic" />
        </Grid>
        <Grid item container md={6}>
          <TileTemplate data={ContactData} heading="Contact" />
        </Grid>
      </Grid>
    </Grid>
  );
}
