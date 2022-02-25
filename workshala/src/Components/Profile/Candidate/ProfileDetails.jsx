import * as React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Paper, TextField, Button } from "@mui/material";
import { Download } from "@mui/icons-material";
import Loader from "../../../Services/Utils/Loader";

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
  return (
    <Paper sx={{ borderRadius: 4, p: 2 }}>
      <Grid container>
        <Grid item container md={12}>
          <Grid item md={4}>
            <TileHeading heading={props.data.user} size={25} />
          </Grid>
          <Grid item md={7.5} sx={{ textAlign: "end", mt: 3, marginRight: 1 }}>
            <Button variant="outlined" component={Link} to="/editProfile">
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

const SkillsRow = (props) => {
  return (
    <Grid container sx={{ ml: 3, mr: 3 }} spacing={2}>
      <Grid item md={5}>
        <TextField
          margin="normal"
          required
          fullWidth
          disabled
          label={props.skill}
          name={props.skill}
          variant="standard"
        />
      </Grid>

      <Grid item md={5} sx={{ mb: 3 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          disabled
          label={props.experience}
          name={props.experience}
          variant="standard"
        />
      </Grid>
    </Grid>
  );
};

const ExpRow = (props) => {
  return (
    <Grid container sx={{ ml: 3, mr: 3 }} spacing={2}>
      <Grid item md={3.5}>
        <TextField
          margin="normal"
          required
          fullWidth
          disabled
          id={props.lastCompany}
          label={props.lastCompany}
          name={props.lastCompany}
          variant="standard"
        />
      </Grid>

      <Grid item md={3.5} sx={{ mb: 3 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          disabled
          id={props.startDate}
          label={props.startDate}
          name={props.startDate}
          variant="standard"
        />
      </Grid>

      <Grid item md={3.5} sx={{ mb: 3 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          disabled
          id={props.endDate}
          label={props.endDate}
          name={props.endDate}
          variant="standard"
        />
      </Grid>
    </Grid>
  );
};

const TileTemplate = (props) => {
  return (
    <Paper sx={{ borderRadius: 4, p: 2 }}>
      <TileHeading heading={props.heading} size={20} />

      <Grid item container md={12}>
        {props.data.map((item, i) => (
          <TileRow left={item.title} right={item.val} key={i} />
        ))}
      </Grid>
    </Paper>
  );
};

const SkillsForm = (props) => {
  return (
    <Paper sx={{ borderRadius: 4, p: 2 }}>
      <TileHeading heading="Skills" size={18} />

      <Grid item container>
        {props.data.map((item, i) => (
          <SkillsRow
            key={i}
            skill={"" + item.skill}
            experience={"" + item.experience}
          />
        ))}
      </Grid>
    </Paper>
  );
};

const ExperienceTile = (props) => {
  return (
    <Paper sx={{ borderRadius: 4, p: 2 }}>
      <TileHeading heading="Experience" size={18} />

      <Grid item container>
        {props.data.map((item, i) => (
          <ExpRow
            key={i}
            lastCompany={item.lastCompany}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        ))}
      </Grid>
    </Paper>
  );
};

const showpdf = (directory) => {
  window.open(directory);
};

const ResumeTile = (props) => {
  return (
    <Paper sx={{ borderRadius: 4, p: 2 }}>
      <TileHeading heading="Resume" size={18} />

      <Grid item container sx={{ p: 2 }} spaning={2}>
        <Grid item>
          <Button
            variant="outlined"
            style={{ borderRadius: 8, border: "dashed" }}
            onClick={() => {
              showpdf(props.data);
            }}
            endIcon={<Download style={{ color: "brown" }} />}
          >
            Resume
          </Button>
        </Grid>
        <Grid item sx={{ m: 3 }}>
          <Typography style={{ fontSize: 10 }}>
            uploaded on {props.uploadedOn}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default function ProfileDetails(props) {
  if (props.data !== undefined) {
    const userData = props.data;

    const AboutMeData = {
      user: userData.firstName + " " + userData.lastName,
      AboutMeText: userData.bio,
    };

    const BasicData = [
      { title: "Age", val: userData.age },
      { title: "From", val: userData.city },
      { title: "Date of Birth", val: userData.dob },
      { title: "Gender", val: userData.gender },
      { title: "Profile", val: userData.profile },
      { title: "Password", val: "*****" },
    ];

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

        <Grid item container spacing={1}>
          <Grid item md={6}>
            <TileTemplate data={BasicData} heading="Basic" />
          </Grid>
          <Grid item md={6}>
            <TileTemplate data={ContactData} heading="Contact" />
          </Grid>
        </Grid>

        <Grid item md={12}>
          <SkillsForm data={userData.skills} />
        </Grid>

        <Grid item md={12}>
          <ExperienceTile data={userData.experience} />
        </Grid>

        <Grid item md={12}>
          <ResumeTile
            data={userData.resume.url}
            uploadedOn={userData.updatedAt}
          />
        </Grid>
      </Grid>
    );
  } else {
    return <Loader />;
  }
}
