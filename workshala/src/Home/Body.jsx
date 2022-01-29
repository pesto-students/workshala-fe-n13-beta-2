import * as React from "react";
import {
    Grid,
    Tabs,
    Tab,
    Typography,
    Box,
    Button,
    TextField,
  } from "@mui/material";

  const FindJobs = (props) => {
    //   const classes = useStyles();
    //   const [value, setValue] = React.useState(0);
    
    //   const handleChange = (event, newValue) => {
    //     setValue(newValue);
    //   };
      return (
        <Box sx={{ width: "100%" }}>
          <Tabs
           // value={value}
            //onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="Find a Job" label="Find a Job" />
            <Tab value="Find a Candidate" label="Find a Candidate" />
          </Tabs>
          {/* <TabPanel value={value} index={0}>
            <div>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
             </div>
         </TabPanel>*/}
          <Grid container spacing sx={{ mx: 1 }}>
            <Grid item xs={3} sm={3} md={3}>
              <TextField id="title" label="Title" variant="outlined" />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <TextField id="category" label="Category" variant="outlined" />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <TextField id="Location" label="Location" variant="outlined" />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ mx: 5, height: 50, width: 150 }}
              >
                {" "}
                Search{" "}
              </Button>
            </Grid>
          </Grid>
        </Box>
      );
    };

export default function Body () {
    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Typography component="h1" fontSize={14} color="black">
            We have 900,000 great job offers you deserve
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            component="h1"
            fontSize={38}
            color="black"
            sx={{ width: 250 }}
          >
            Your Dream Job is Waiting
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <FindJobs />
        </Grid>
      </Grid>
    );
  };