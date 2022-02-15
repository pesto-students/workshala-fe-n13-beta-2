import * as React from "react";
import homeImg from "../Assets/Images/home.jpeg";
import Footer from "../Components/Home/Footer";
import Body from "../Components/Home/Body";
import {Grid} from "@mui/material";
import Header from "../Components/Home/Header";

export default function Home() {
  const myStyle = {
    backgroundImage: `url(${homeImg})`,
    backgroundSize: "cover",
    height: "490px",
    display: "flex",
    margin: -8,
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <Grid container style={myStyle}>
          <Grid item xs={12} sm={12} md={12}>
            <Header />
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={{ mx: 50, mt: 25 }}>
            <Body />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} sx={{ mt: 2 }}>
        <Footer />
      </Grid>
    </Grid>
  );
}
