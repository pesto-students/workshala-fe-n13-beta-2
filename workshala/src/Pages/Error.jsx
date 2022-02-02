import {Avatar, Grid, Typography, Button} from "@mui/material";
import * as React from "react";
import error from '../Assets/Images/404.png'
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';


export default function Error() {

    const navigate = useNavigate();

    return (
        <div>
            <Grid container
                sx={
                    {
                        backgroundColor: "yellow",
                        backgroundSize: '100%'
                    }
            }>
                <Grid item
                    xs={12}
                    sm={12}
                    md={6}
                    align="center"
                    alignContent={"flex-end"}>
                    <Avatar src={error}
                        style={
                            {fontSize: 88}
                        }
                        sx={
                            {
                                width: "75%",
                                height: "75%",
                                p: 10,
                                mx: 10
                            }
                        }/>
                </Grid>
                <Grid item
                    xs={12}
                    sm={12}
                    md={6}
                    sx={
                        {mt: 10}
                }>
                    <Typography component="h1" variant="h5" color="Red"
                        style={
                            {fontSize: 88}
                        }

                        sx={
                            {mt: 14}
                    }>
                        404
                    </Typography>
                    <Typography component="h1" variant="h5" color="Black"
                        style={
                            {fontSize: 15}
                    }>
                        Something's missing
                    </Typography>
                    <Typography component="h1" variant="h5" color="Black"
                        style={
                            {fontSize: 11}
                        }
                        sx={
                            {mt: 1}
                    }>
                        This page is missing or you
                        <br/>
                        assembled the link incorrectly
                    </Typography>
                    <Button 
                    component={Link}
                    to="/Home"
                    sx={
                            {mt: 10}
                        }
                        onClick={
                            navigate('Home')
                    }>

                        Go Back to Home
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
