import * as React from "react";
import SegmentIcon from '@mui/icons-material/Segment';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import ProfileDropdown from '../Layouts/ProfileDropdown'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    Grid, IconButton, 
    Typography
} from "@mui/material";

export default function Header({dashBoardSideNavToggle}, props) {

    var profileData = {
        Name: 'John Doe',
        Role: 'Candidate'
    };

    const user = useSelector(state => state.user.user);

    if(user != undefined && user.data != undefined) {

            const userData = user.data;
            console.log("userData-"+userData);
            profileData = {
                ...profileData,
                Name: userData.firstName + " " + userData.lastName,
                Role: userData.role
            }
    }

    return (
        <Grid container sx={{mt:2, height:'10vh'}}>
            {/* icon */}
            <Grid item
                xs={0.3}
                sm={0.3}
                md={0.3} >
                <IconButton onClick={dashBoardSideNavToggle}>
                    <SegmentIcon/>
                </IconButton>
            </Grid>
            
            {/* message icon */}
            <Grid item md={11} container justifyContent={"flex-end"} spacing={2}>
                <Grid item  md={0.8}>
                    <IconButton component={Link} to="/Error" sx={{mt:0.5}}>
                        <MessageIcon style={{fontSize:34}}/>
                    </IconButton>
                </Grid>

                {/* notification icon */}
                <Grid item md={0.8}>
                    <IconButton component={Link} to="/Error">
                        <NotificationsActiveIcon style={{fontSize:34}}/>
                    </IconButton>
                </Grid>
            
                <Grid item md={0.8}>
                    <IconButton component={Link} to="EditProfile">
                        <PersonIcon style={{fontSize:34}}/>
                    </IconButton>
                </Grid>
                    
                <Grid item container direction="column" sx={{mt:0.5}} md={1}>
                    <Grid item>
                        <Typography component="h1" variant="h5" color="black" style={{fontSize:14}}>
                            {profileData.Name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography component="h1" variant="h5" color="black" style={{fontSize:14, color:"brown"}}>
                            {profileData.Role}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md={0.1}>
                    {/*<ReorderIcon style={{fontSize:34}}/>*/}
                    <ProfileDropdown/>
                </Grid>                
            </Grid>
        </Grid>
    );
}
