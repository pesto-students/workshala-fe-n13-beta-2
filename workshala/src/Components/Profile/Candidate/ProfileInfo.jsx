import * as React from "react";
import whatsapp from '../../../Assets/Images/whatsapp.png';
import Phone_icon from '../../../Assets/Images/Phone_icon.png';
import email from '../../../Assets/Images/email.png';

import {
    Grid,
    Typography,
    CardMedia,
    CardContent,
    Card,
    Avatar
} from "@mui/material";

export default function ProfileInfo(props) {
    let profileData = {};

    if(props.data !== undefined) {
        profileData = ({
            Name: props.data.firstName + " " + props.data.lastName,
            Email: (props.data.email) ? props.data.email : 'Not Available',
            Profile: (props.data.profile) ? props.data.profile : "Not Available",
            Followers: (props.data.followers) ? props.data.followers : '0',
            Following: (props.data.following) ? props.data.following : '0',
            Mobile: (props.data.mobile) ? props.data.mobile : 'Not Available',
            Whatsapp: (props.data.mobile) ? props.data.mobile : 'Not Available',
            Image: (props.data.profileImg) ? props.data.profileImg.url: 'Not Available'
        });
    } 
    
    return (
        <Card sx={
            {borderRadius: 4}
        }>
            <CardMedia height="45%" component="img"
                image={ profileData.Image }
                alt="User Profile Image"/>
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
