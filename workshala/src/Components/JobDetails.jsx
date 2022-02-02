import * as React from "react";

import { Grid, Typography, CardContent, Card, Avatar } from "@mui/material";

import IconRa from "../Assets/Images/react.jpg";
import star from "../Assets/Images/star.png";

import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { VscAdd } from "react-icons/vsc";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import workEx from "../Images/work_experience_icon.png";
import experience from "../Images/experience_icon.png";
import empType from "../Images/empType.png";
import salaryIcon from "../Images/salary_icon.png";
import office1 from "../Images/ofc1.png";
import office2 from "../Images/ofc2.png";
import office3 from "../Images/ofc3.png";
import office4 from "../Images/ofc4.png";
import office5 from "../Images/ofc5.png";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  {
    img: office1,
    title: "Breakfast",
  },
  {
    img: office2,
    title: "Burger",
  },
  {
    img: office3,
    title: "Camera",
  },
  {
    img: office4,
    title: "Coffee",
  },
  {
    img: office5,
    title: "Hats",
  },
];

export default function JobDetails(props) {
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
      {/* Job Title */}
      <Grid container sx={{ mt: 4 }}>
        <Grid item sx={{ marginLeft: 4 }}>
          <Typography
            variant="h6"
            fontSize={30}
            style={{ fontWeight: 600 }}
            align="center"
          >
            Food Delivery boy
          </Typography>
        </Grid>

        {/* Apply Button */}
        <Grid item sx={{ marginLeft: 40, mt: 1 }}>
          <Button
            variant="contained"
            size="large"
            fontSize="large"
            align="right"
            sx={{ borderRadius: 8 }}
          >
            Apply
          </Button>
        </Grid>
      </Grid>

      {/* subTitle */}
      <Grid container sx={{ mt: 4 }}>
        <Grid item>
          <Typography
            variant="h2"
            fontSize={20}
            style={{ fontWeight: 800, color: "#0000FF", marginLeft: 28 }}
          >
            ABC team
          </Typography>
        </Grid>
        <Grid item sx={{ marginLeft: 4, marginTop: 0.5 }}>
          <Typography
            variant="h3"
            fontSize={16}
            style={{
              fontWeight: 800,
              color: "#000000",
              mt: 1,
              fontFamily: "Roboto",
            }}
          >
            Posted 10 days ago
          </Typography>
        </Grid>
      </Grid>

      {/* requirement details */}

      {/* work Experience */}
      <Grid container direction="row" sx={{ marginLeft: 3 }}>
        <Grid container xs={3}>
          <Grid item xs={3} sm={3} md={3}>
            <Avatar
              src={workEx}
              sx={{
                width: 30,
                height: 30,
                mt: 2,
              }}
            />
          </Grid>
          <Grid item>
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
              {"Work Level"}{" "}
            </Typography>
          </Grid>
        </Grid>

        {/* Min experience */}
        <Grid container xs={3}>
          <Grid item xs={3} sm={3} md={3}>
            <Avatar
              src={experience}
              sx={{
                width: 30,
                height: 30,
                mt: 2,
              }}
            />
          </Grid>
          <Grid item>
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
              {"Min. Experience"}{" "}
            </Typography>
          </Grid>
        </Grid>

        {/* Employee Type */}
        <Grid container xs={3}>
          <Grid item xs={3} sm={3} md={3}>
            <Avatar
              src={empType}
              sx={{
                width: 30,
                height: 30,
                mt: 2,
              }}
            />
          </Grid>
          <Grid item>
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
              {"Emplyee Type"}{" "}
            </Typography>
          </Grid>
        </Grid>

        {/* Salary */}
        <Grid itcontainerem xs={3}>
          <Grid item xs={1} sm={1} md={1}>
            <Avatar
              src={salaryIcon}
              sx={{
                width: 30,
                height: 30,
                mt: 2,
              }}
            />
          </Grid>
          <Grid item xs={2} sm={2} md={2}>
            <Typography
              variant="h6"
              fontSize={12}
              sx={{
                mt: -4,
                marginLeft: 6,
              }}
              align="center"
              style={{ fontWeight: 600 }}
            >
              {"Salary"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction="row">
        {/* Work Level text */}
        <Grid item xs={3} sm={3} md={3}>
          <Typography
            variant="h6"
            fontSize={12}
            sx={{
              mt: -1,
              marginLeft: -8,
            }}
            align="center"
            style={{ fontWeight: 600 }}
          >
            {"Senior"}
          </Typography>
        </Grid>

        {/* Min Experience text */}
        <Grid item xs={3} sm={3} md={3}>
          <Typography
            variant="h6"
            fontSize={12}
            sx={{
              mt: -1,
              marginLeft: -8,
            }}
            align="center"
            style={{ fontWeight: 600 }}
          >
            {"3 Years"}
          </Typography>
        </Grid>

        {/* Employee Type Text */}
        <Grid item xs={3} sm={3} md={3}>
          <Typography
            variant="h6"
            fontSize={12}
            sx={{
              mt: -1,
              marginLeft: -8,
            }}
            align="center"
            style={{ fontWeight: 600 }}
          >
            {"Part-Time"}
          </Typography>
        </Grid>

        {/* Salary Text */}
        <Grid item xs={3} sm={3} md={3}>
          <Typography
            variant="h6"
            fontSize={12}
            sx={{
              mt: -1,
              marginLeft: -8,
            }}
            align="center"
            style={{ fontWeight: 600 }}
          >
            {"$ 900/month"}
          </Typography>
        </Grid>
      </Grid>

      {/* overview and description */}
      <Grid container direction="column">
        <Grid item xs={1} sm={1} md={1}>
          <Typography
            variant="h6"
            fontSize={15}
            sx={{
              mt: 3,
              marginLeft: 4,
            }}
            align="start"
            style={{ fontWeight: 800 }}
          >
            {"OverView"}
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <Typography
            variant="h6"
            fontSize={15}
            align="justify"
            sx={{
              padding: 4,
            }}
          >
            {
              "The lines are random and randomly typed the lines are random and randomly typed the lines are random and randomly typed randomly typed the lines are random and randomly typed the lines are random and randomly typed randomly typed the lines are random and randomly typed the lines are random and randomly typed randomly typed the lines are random and randomly typed the lines are random."
            }
          </Typography>
        </Grid>
      </Grid>

      {/* Gallery */}
      <Typography
        variant="h6"
        fontSize={15}
        sx={{
          mt: 3,
          marginLeft: 4,
        }}
        align="start"
        style={{ fontWeight: 800 }}
      >
        {"Gallery"}
      </Typography>
      <Grid container direction="row" sx={{ marginLeft: 2 }}>
        <ImageList sx={{ width: 800, height: 450 }} cols={5} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Card>
  );
}
