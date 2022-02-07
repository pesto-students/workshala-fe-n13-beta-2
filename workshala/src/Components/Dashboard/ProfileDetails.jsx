import * as React from "react";

import {
  Grid,
  Typography,
  CardContent,
  Card,
  Avatar,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import {
  Paid,
  Group,
  Work,
  School,
  Upload,
  Article,
} from "@mui/icons-material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SkillItems = [
  {
    skill: "Cooking",
    experience: "3 years",
  },
  {
    skill: "Cooking",
    experience: "3 years",
  },
];

const ExperienceItems = [
  {
    lastCompany: "Last Company",
    startDate: "10/01/2019",
    endDate: "10/1/2019",
  },
  {
    lastCompany: "Company",
    startDate: "10/01/2019",
    endDate: "10/1/2019",
  },
];

const CardTemplate = (props) => {
  return (
    <Card
      style={{}}
      sx={{
        ml: 3,
        mt: 1,
        border: 1,
        borderStyle: "dashed",
        width: 200,
        height: 70,
        color: "brown",
        borderColor: "black",
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ p: 1 }}>
        <Grid container>
          <Grid item xs={10} sm={10} md={10} sx={{ mt: 1 }}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                <Typography
                  fontSize={15}
                  color={"black"}
                  sx={{ mx: 2.5 }}
                  align={"left"}
                >
                  {props.title}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "black",
                    mx: 2.5,
                  }}
                  align={"left"}
                >
                  {props.content}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} sm={2} md={2} sx={{ mt: 2 }}>
            {props.logo}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const SkillsForm = () => {
  return (
    <Grid item md={12} xs={12} sm={12} direction="column">
      {SkillItems.map((item, i) => (
        <Grid item container sx={{ mt: 2 }} md={12}>
          <Grid container xs={3} md={3}>
            <Grid item>
              <Typography
                variant="h6"
                fontSize={15}
                style={{ fontWeight: 800 }}
                align="start"
                sx={{ marginLeft: 3, mt: 4 }}
              >
                Skill
              </Typography>
            </Grid>

            <Grid item>
              <TextField
                sx={{
                  width: 100,
                  marginLeft: 2,
                  mt: 1,
                }}
                required
                id={item.skill}
                label={item.skill}
                defaultValue={item.skill}
                variant="standard"
              />
            </Grid>
          </Grid>
          <Grid container xs={4} md={4}>
            <Grid item>
              <Typography
                variant="h6"
                fontSize={15}
                style={{ fontWeight: 600 }}
                align="start"
                sx={{ marginRight: 2, mt: 4 }}
              >
                Experience(in years)
              </Typography>
            </Grid>
            <Grid>
              <TextField
                sx={{ width: 150, mt: 1 }}
                required
                id={item.experience}
                label={item.experience}
                defaultValue={item.experience}
                variant="standard"
              />
            </Grid>
          </Grid>
          <Grid container xs={2} md={2} sx={{ mt: 4 }}>
            <Grid item xs={1} sm={1} md={1}>
              <ModeEditOutlineOutlinedIcon />
            </Grid>
            <Grid item xs={2} sm={2} md={2} sx={{ marginLeft: 3 }}>
              <DeleteForeverOutlinedIcon />
            </Grid>
          </Grid>
        </Grid>
      ))}{" "}
    </Grid>
  );
};

const ExperienceForm = () => {
  return (
    <Grid item md={12} xs={12} sm={12} direction="column">
      {ExperienceItems.map((item, i) => (
        <Grid item container sx={{ mt: 2 }} md={12}>
          <Grid container xs={4} md={4}>
            <Grid item>
              <Typography
                variant="h6"
                fontSize={15}
                style={{ fontWeight: 800 }}
                align="start"
                sx={{ marginLeft: 3, mt: 4 }}
              >
                Last Company
              </Typography>
            </Grid>

            <Grid item>
              <TextField
                sx={{
                  width: 150,
                  marginLeft: 1,
                  mt: 1,
                }}
                required
                id={item.lastCompany}
                label={item.lastCompany}
                defaultValue={item.lastCompany}
                variant="standard"
              />
            </Grid>
          </Grid>
          <Grid container xs={3} md={3}>
            <Grid item>
              <Typography
                variant="h6"
                fontSize={15}
                style={{ fontWeight: 600 }}
                align="start"
                sx={{ marginRight: 2, mt: 4 }}
              >
                Start Date
              </Typography>
            </Grid>
            <Grid>
              <TextField
                sx={{ width: 120, mt: 1 }}
                required
                id={item.startDate}
                label={item.startDate}
                defaultValue={item.startDate}
                variant="standard"
              />
            </Grid>
          </Grid>
          <Grid container xs={3} md={3}>
            <Grid item>
              <Typography
                variant="h6"
                fontSize={15}
                style={{ fontWeight: 600 }}
                align="start"
                sx={{ marginRight: 2, mt: 4 }}
              >
                End Date
              </Typography>
            </Grid>
            <Grid>
              <TextField
                sx={{ width: 120, mt: 1 }}
                required
                id={item.endDate}
                label={item.endDate}
                defaultValue={item.endDate}
                variant="standard"
              />
            </Grid>
          </Grid>
          <Grid container xs={1} md={1} sx={{ mt: 4 }}>
            <Grid item xs={1} sm={1} md={1}>
              <ModeEditOutlineOutlinedIcon />
            </Grid>
            <Grid item xs={1} sm={1} md={1} sx={{ marginLeft: 3 }}>
              <DeleteForeverOutlinedIcon />
            </Grid>
          </Grid>
        </Grid>
      ))}{" "}
    </Grid>
  );
};

export default function ProfileDetails(props) {
  return (
    <Grid container>
      <Paper
        sx={{
          mx: 2.5,
          border: 0,
          width: "95%",
          height: "50%",
          borderRadius: 4,
        }}
      >
        <Grid container direction="row">
          <Grid container>
            <Grid item xs={11} md={11}>
              <Typography
                variant="h6"
                fontSize={30}
                style={{ fontWeight: 600 }}
                align="start"
                sx={{ ml: 2, mt: 2 }}
              >
                Welcome, John Doe
              </Typography>
            </Grid>

            <Grid item xs={1} md={1} sx={{ mt: 3 }}>
              <MoreVertIcon align="right" />
            </Grid>
          </Grid>
          <Grid>
            <Typography
              variant="h6"
              fontSize={16}
              style={{ fontWeight: 600, fontFamily: "Fira Sans" }}
              align="start"
              sx={{ marginLeft: 2, mt: 2 }}
            >
              About Me
            </Typography>

            <Typography
              variant="h6"
              fontSize={15}
              align="justify"
              sx={{
                padding: 2,
              }}
            >
              {
                "The lines are random and randomly typed the lines are random and randomly typed the lines are random and randomly typed randomly typed the lines are random and randomly typed the lines are random and randomly typed randomly typed the lines are random and randomly typed the lines are random and randomly typed randomly typed the lines are random and randomly typed the lines are random."
              }
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Grid container direction="colummn" sx={{ mt: 1 }}>
        <Grid container xs={6} md={6}>
          <Paper
            sx={{
              mx: 2.5,
              border: 0,
              width: "90%",
              height: "100%",
              borderRadius: 4,
            }}
          >
            <Grid container>
              <Grid item xs={11} md={11}>
                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontWeight: 800, fontFamily: "Fira Sans" }}
                  align="start"
                  sx={{ marginLeft: 2, mt: 2 }}
                >
                  Basic
                </Typography>
              </Grid>
              <Grid item xs={1} md={1} sx={{ mt: 2 }}>
                <MoreVertIcon align="right" />
              </Grid>
            </Grid>

            <Grid container direction="column">
              <Grid item direction="column" xs={1} md={1}>
                <Grid>
                  <Typography
                    variant="h6"
                    fontSize={18}
                    align="center"
                    style={{ fontFamily: "Fira Sans" }}
                    sx={{ marginRight: 30, mt: 2 }}
                  >
                    Age
                  </Typography>
                </Grid>
                <Grid item direction="column" xs={1} md={1}>
                  <Typography
                    variant="h6"
                    fontSize={18}
                    align="center"
                    style={{ fontFamily: "Fira Sans" }}
                    sx={{ mt: -3.4, marginLeft: 0 }}
                  >
                    18
                  </Typography>
                </Grid>
              </Grid>

              <Grid item direction="column" xs={2} md={2}>
                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginRight: 30 }}
                >
                  From
                </Typography>
                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginLeft: 8, mt: -3.4 }}
                >
                  Hyderabad
                </Typography>
              </Grid>

              <Grid item direction="column" xs={2} md={2}>
                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginRight: 30 }}
                >
                  Date of Birth
                </Typography>

                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginLeft: 6, mt: -3.3 }}
                >
                  20/12/2003
                </Typography>
              </Grid>
              <Grid item direction="column" xs={2} md={2}>
                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginRight: 30 }}
                >
                  Gender
                </Typography>

                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginLeft: 2, mt: -3.3 }}
                >
                  Male
                </Typography>
              </Grid>
              <Grid item direction="column" xs={2} md={2}>
                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginRight: 30 }}
                >
                  Password
                </Typography>

                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginLeft: 2, mt: -3.3 }}
                >
                  ******
                </Typography>
              </Grid>
            </Grid>
            <Button
              variant="outlined"
              align="right"
              borderColor="#000000"
              sx={{ borderRadius: 8, my: 3, ml: 36 }}
              style={{ color: "#000000", fontSize: "12px" }}
            >
              Reset Password
            </Button>
          </Paper>
        </Grid>

        <Grid container xs={6} md={6} padding="2px">
          <Paper
            sx={{
              mx: 2.5,
              border: 0,
              width: "90%",
              height: "100%",
              borderRadius: 4,
            }}
          >
            <Grid container>
              <Grid item xs={11} md={11}>
                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontWeight: 800, fontFamily: "Fira Sans" }}
                  align="start"
                  sx={{ marginLeft: 2, mt: 2 }}
                >
                  Contact
                </Typography>
              </Grid>
              <Grid item xs={1} md={1} sx={{ mt: 2 }}>
                <MoreVertIcon align="right" />
              </Grid>
            </Grid>

            <Grid container direction="column">
              <Grid item direction="column" xs={1} md={1}>
                <Grid>
                  <Typography
                    variant="h6"
                    fontSize={18}
                    align="center"
                    style={{ fontFamily: "Fira Sans" }}
                    sx={{ marginRight: 30, mt: 2 }}
                  >
                    Mobile
                  </Typography>
                </Grid>
                <Grid item direction="column" xs={1} md={1}>
                  <Typography
                    variant="h6"
                    fontSize={18}
                    align="center"
                    style={{ fontFamily: "Fira Sans" }}
                    sx={{ mt: -3.4, marginLeft: 7 }}
                  >
                    +1-398-976-876
                  </Typography>
                </Grid>
              </Grid>

              <Grid item direction="column" xs={2} md={2}>
                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginRight: 30 }}
                >
                  Email
                </Typography>
                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginLeft: 8, mt: -3.4 }}
                >
                  Doe@gmail.com
                </Typography>
              </Grid>

              <Grid item direction="column" xs={2} md={2}>
                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginRight: 30 }}
                >
                  Address
                </Typography>

                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginLeft: 6, mt: -3.3 }}
                >
                  ABC street
                </Typography>
              </Grid>
              <Grid item direction="column" xs={2} md={2}>
                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginRight: 30 }}
                >
                  City
                </Typography>

                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginLeft: 2, mt: -3.3 }}
                >
                  NYC
                </Typography>
              </Grid>
              <Grid item direction="column" xs={2} md={2}>
                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginRight: 30 }}
                >
                  Country
                </Typography>

                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginLeft: 2, mt: -3.3 }}
                >
                  India
                </Typography>
              </Grid>
              <Grid item direction="column" xs={2} md={2}>
                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginRight: 30 }}
                >
                  Pincode
                </Typography>

                <Typography
                  variant="h6"
                  fontSize={18}
                  style={{ fontFamily: "Fira Sans" }}
                  align="center"
                  sx={{ marginLeft: 2, mt: -3.3 }}
                >
                  110110
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* skills */}
      <Paper
        sx={{
          mx: 2.5,
          border: 0,
          width: "95%",
          height: "200px",
          borderRadius: 4,
          mt: 1,
          padding: "16px",
        }}
      >
        <SkillsForm />
      </Paper>

      {/* Resume */}
      <Paper
        sx={{
          mx: 2.5,
          border: 0,
          width: "95%",
          height: "120px",
          borderRadius: 4,
          mt: 2,
          padding: "16px",
        }}
      >
        <Grid item>
          <Typography style={{ fontWeight: 650, fontSize: 18 }} sx={{ ml: 3 }}>
            Resume
          </Typography>
        </Grid>

        <Grid item container>
          <Grid item>
            <CardTemplate
              logo={<Upload />}
              title="Upload Resume"
              content="(Format: .Pdf, .Doc)"
            />
          </Grid>
          <Grid item>
            <CardTemplate
              logo={<Article />}
              title="Resume.pdf"
              content="871 KB"
            />
          </Grid>
        </Grid>
      </Paper>
      {/* Experience */}
      <Paper
        sx={{
          mx: 2.5,
          border: 0,
          width: "95%",
          height: "200px",
          borderRadius: 4,
          mt: 2,
          padding: "16px",
        }}
      >
        <ExperienceForm />
      </Paper>
    </Grid>
  );
}
