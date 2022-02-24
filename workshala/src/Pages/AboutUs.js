import { Typography, Box, Paper, Stack, Grid, Button, Avatar } from "@mui/material";
import * as React from "react";
import contactUsBackground2 from '../Assets/Images/contactus-background.jpeg'
import dev from '../Assets/Images/dev.png'
import { Link } from "react-router-dom";

export default function AboutUs() {
    const styles = {
        paperContainer: {
            backgroundImage: `url(${contactUsBackground2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: "no-repeat",
            width:"100%"
        }
    };
    return (
        // <Box textAlign={"center"} style={{flexDirection: "column", justifyContent: "center"}}>
        //     <Typography style={{fontSize:35, fontWeight:800}}>
        //         Contact Us
        //     </Typography>
        // </Box>
        
        <Box justifyContent="center" 
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "80%",
          height: '100vh',
        },
      }}
    >
        
      <Paper component={Stack} direction="column" justifyContent="center" alignSelf="center" style={styles.paperContainer}>
      
      <Grid container spacing={3}>
            <Grid item md={12}>
              <Typography variant="h1" component="h3" textAlign={"center"} style={{fontWeight:800}} >
                About Us
            </Typography>
          </Grid>
          <Grid item md={12} style={{textAlign:"-webkit-center"}}>
            <Typography component="p" color={"GrayText"}  width={"50%"} align="center"
              paragraph={true}>
            This portal aims to provide a bridge between an organisation and job seekers. An advertiser can post the job requirements, search for resumes, connect with job seekers and schedule an interview process while the job seeker can search for the organisations, apply to a post and track their interview process. This will help both organisations and job seekers to connect and grow together.
          </Typography>
          </Grid>
          <Grid item style={{textAlign:"-webkit-center"}} md={12} >
              <Box sx={{borderRadius:8, bgcolor:"whitesmoke", width:"250px"}}>
              <Typography component="p" variant="h4"  color={"red"}>
                  THE TEAM
              </Typography>
              </Box>
          </Grid>
          <Grid item container sx={{mt:5}} >
          <Grid item container direction="column" md={5} sx={{ml:5}} alignContent={"center"}>
            <Grid item alignSelf={"center"}>
                Surendra Singh
            </Grid>
            <Grid item>
                
                <Avatar src={dev}
                                      sx={{width: 100, height: 100}}/>

            </Grid>
        </Grid>
        
            
            <Grid item container direction="column" md={5.5} alignContent={"center"}>
            <Grid item alignSelf={"center"}>
                Suyash Mishra
            </Grid>
            <Grid item>
                
            <Avatar src={dev}
                                      sx={{width: 100, height: 100}}/>
            </Grid>
            </Grid>
            <Grid item alignContent={"center"} md={12} textAlign={"center"} sx={{p:10}}>
            <Button variant="contained" sx={{width:"200px", height:"50px", borderRadius:5}} component={Link} to="/">
                Back to Home
                </Button>
            </Grid>
            </Grid>
            
        </Grid>
      </Paper>
      </Box>
    
    );
}