import * as React from "react";
import user2 from '../../Assets/Images/user2.jpeg'
import whatsapp from '../../Assets/Images/whatsapp.png'
import Phone_icon from '../../Assets/Images/Phone_icon.png';
import email from '../../Assets/Images/email.png';
import getUser from '../../redux/actions/user'

import {
    Grid,
    Typography,
    CardMedia,
    CardContent,
    Card,
    Avatar
} from "@mui/material";
import { useSelector} from "react-redux";

// Default data
var profileData = {
    Image: user2,
    Name: "John Doe",
    Profile: "Mechanic",
    Followers: 5962,
    Following: 228,
    Mobile: "+1-398-976-876",
    Whatsapp: "+1-398-976-876",
    Email: "Doe@gmail.com"
}

export function setProfileData(userData) {
    profileData = {
        ...profileData,
        Name: userData.firstName + " " + userData.lastName,
        Email: userData.email
    }
}

export default function ProfileInfo(props) {
  
    const userInfo = useSelector(state => state.userInfo.userInfo);

    if(userInfo != undefined && userInfo.status && userInfo.data != undefined 
            && userInfo.data.result != undefined) {

            const userData = userInfo.data.result[0];
            console.log("userData-"+userData);
            profileData = {
                ...profileData,
                Name: userData.firstName + " " + userData.lastName,
                Email: userData.email,
                Image: userData.profileImg.url,
                Profile: userData.profile,
                Followers: userData.followers,
                Following: userData.following,
                Mobile: userData.mobile
            }
    }
    
    return (
        <Card sx={
            {borderRadius: 4}
        }>
            <CardMedia height="45%" component="img"
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
                    profileData.Profile
                } </Typography>
                <Grid container>
                    <Grid item
                        xs={5}
                        sm={5}
                        md={5}>
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
                        md={5}>
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
                        md={5}>
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

                <Grid container
                    sx={
                        {p: 3}
                }>
                    <Grid item
                        xs={3}
                        sm={3}
                        md={3}>
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
                            {mt: 0.5}
                    }>
                        {
                        profileData.Mobile
                    } </Grid>
                </Grid>

                <Grid container
                    sx={
                        {
                            p: 3,
                            mt: -4
                        }
                }>
                    <Grid item
                        xs={3}
                        sm={3}
                        md={3}>
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
                            {mt: 0.5}
                    }>
                        {
                        profileData.Whatsapp
                    } </Grid>
                </Grid>

                <Grid container
                    sx={
                        {
                            p: 3,
                            mt: -4
                        }
                }>
                    <Grid item
                        xs={3}
                        sm={3}
                        md={3}>
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
                            {mt: 0.5}
                    }>
                        {
                        profileData.Email
                    } </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
