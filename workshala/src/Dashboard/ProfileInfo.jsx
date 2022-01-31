import * as React from "react";
import CardMedia from '@mui/material/CardMedia';
import user2 from '../Images/user2.jpeg'
import whatsapp from '../Images/whatsapp.png'
import Phone_icon from '../Images/Phone_icon.png';
import email from '../Images/email.png';
import {
    Grid,
    Typography,
    CardContent,
    Card,
    Avatar
} from "@mui/material";

const profileData = {
    Image: user2,
    Name: "John Doe",
    Role: "Mechanic",
    Following: 228,
    Followers: 5962,
    Mobile: "+1-398-976-876",
    Whatsapp: "+1-398-976-876",
    Email: "Doe@gmail.com"
}

export default function LeftContent(props) {
    return (
        
        <Card sx={
            {
                mt: 1,
                mx: 3.5,
                border: 0,
                width: props.wide,
                height: props.high,
                borderRadius: 4
            }
        }>
            <CardMedia component="img" height="45%" objectFit='cover'
                image={
                    profileData.Image
                }
                alt="User profile"/>
            <CardContent>
                <Typography variant="h5"
                    fontSize={18}
                    style={
                        {fontWeight: 600}
                    }
                    align="center">
                    {
                    profileData.Name
                } </Typography>
                <Typography variant="h5"
                    fontSize={14}
                    align="center">
                    {
                    profileData.Role
                } </Typography>
                <Grid container>
                    <Grid item
                        xs={5}
                        sm={5}
                        md={5}
                        sx={
                            {}
                    }>
                        <Typography variant="h6"
                            fontSize={15}
                            sx={
                                {
                                    mt: 1,
                                    marginLeft: -3
                                }
                            }
                            align="center"
                            style={
                                {fontWeight: 600}
                        }>
                            {
                            profileData.Followers
                        } </Typography>
                    </Grid>
                    <Grid item
                        xs={5}
                        sm={5}
                        md={5}
                        sx={
                            {}
                    }>
                        <Typography variant="h6"
                            fontSize={15}
                            sx={
                                {mt: 1}
                            }
                            align="right"
                            style={
                                {fontWeight: 600}
                        }>
                            {
                            profileData.Following
                        } </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item
                        xs={5}
                        sm={5}
                        md={5}
                        sx={
                            {}
                    }>
                        <Typography variant="h6"
                            fontSize={15}
                            color="#A69F9F"
                            align="left"
                            style={
                                {fontWeight: 600}
                        }>
                            {"Followers"} </Typography>
                    </Grid>
                    <Grid item
                        xs={5}
                        sm={5}
                        md={5}
                        sx={
                            {mx: 1}
                    }>
                        <Typography variant="h6"
                            fontSize={15}
                            color="#A69F9F"
                            sx={
                                {mx: 5}
                            }
                            align="right"
                            style={
                                {fontWeight: 600}
                        }>
                            {"Following"} </Typography>
                    </Grid>
                </Grid>

                <Grid container sx={
                            {p:3}
                    } >
                    <Grid item
                        xs={3}
                        sm={3}
                        md={3}
                      >
                        <Avatar src={Phone_icon}
                            sx={
                                {
                                    width: 30,
                                    height: 30
                                }
                            }/>

                    </Grid>
                    <Grid item
                        xs={9}
                        sm={9}
                        md={9}
                        
                        sx={
                            {mt:0.5}
                    }>

                        {
                        profileData.Mobile
                    } </Grid>
                </Grid>

                <Grid container sx={
                            {p:3, mt:-4}
                    } >
                    <Grid item
                        xs={3}
                        sm={3}
                        md={3}
                      >
                        <Avatar src={whatsapp}
                            sx={
                                {
                                    width: 30,
                                    height: 30
                                }
                            }/>

                    </Grid>
                    <Grid item
                        xs={9}
                        sm={9}
                        md={9}
                        
                        sx={
                            {mt:0.5}
                    }>

                        {
                        profileData.Whatsapp
                    } </Grid>
                </Grid>

                <Grid container sx={
                            {p:3, mt:-4}
                    } >
                    <Grid item
                        xs={3}
                        sm={3}
                        md={3}
                      >
                        <Avatar src={email}
                            sx={
                                {
                                    width: 30,
                                    height: 30
                                }
                            }/>

                    </Grid>
                    <Grid item
                        xs={9}
                        sm={9}
                        md={9}
                        
                        sx={
                            {mt:0.5}
                    }>

                        {
                        profileData.Email
                    } </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
