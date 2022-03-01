import { Typography, Box, Paper, Stack, Grid, Button } from "@mui/material";
import * as React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailIcon from "@mui/icons-material/Mail";
import contactUsBackground2 from "../../Assets/Images/contactus-background.jpeg";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${contactUsBackground2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100%",
    },
  };
  return (
    // <Box textAlign={"center"} style={{flexDirection: "column", justifyContent: "center"}}>
    //     <Typography style={{fontSize:35, fontWeight:800}}>
    //         Contact Us
    //     </Typography>
    // </Box>

    <Box
      justifyContent="center"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "80%",
          height: "100vh",
        },
      }}
    >
      <Paper
        component={Stack}
        direction="column"
        justifyContent="center"
        alignSelf="center"
        style={styles.paperContainer}
      >
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Typography
              variant="h3"
              component="h3"
              textAlign={"center"}
              style={{ fontWeight: 800 }}
            >
              Contact Us
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography component="p" color={"GrayText"} textAlign={"center"}>
              You can connect with us by mail.
            </Typography>
          </Grid>
          <Grid item container sx={{ mt: 5 }}>
            <Grid
              item
              container
              direction="column"
              md={3.5}
              sx={{ ml: 5 }}
              alignContent={"center"}
            >
              <Grid item alignSelf={"center"}>
                <LocationOnIcon />
              </Grid>
              <Grid item>
                <Typography>
                  ABC Street <br />
                  Bangalore
                </Typography>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction="column"
              md={4}
              alignContent={"center"}
            >
              <Grid item alignSelf={"center"}>
                <PhoneIphoneIcon />
              </Grid>
              <Grid item>
                <Typography>+91-0000000000</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              md={4}
              alignContent={"center"}
            >
              <Grid item alignSelf={"center"}>
                <MailIcon />
              </Grid>
              <Grid item>
                <Typography>
                  Surendra.rules@gmail.com <br />
                  suyashm002@gmail.com
                </Typography>
              </Grid>
            </Grid>
            <Grid item alignContent={"center"}>
              <Button
                variant="contained"
                sx={{ p: 5, width: "10px" }}
                component={Link}
                to="/"
              >
                Back to Home
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
