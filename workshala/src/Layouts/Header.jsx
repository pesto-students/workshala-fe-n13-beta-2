import * as React from "react";
import SegmentIcon from '@mui/icons-material/Segment';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import ProfileDropdown from '../Layouts/ProfileDropdown'
import { Link } from 'react-router-dom';

import {
    Grid, Select, IconButton, ListItemIcon, ListItemText,
    Typography
} from "@mui/material";

export default function Header(props) {
    return (

        <Grid container sx={{mt:3, height:'7vh'}}>
            {/* icon */}
            <Grid item
                xs={0.3}
                sm={0.3}
                md={0.3} sx={{mt:0.5}}>
                <SegmentIcon />
            </Grid>

            {/* Dashboard */}

            <Grid item xs={2} sm={2} md={5}>
                <Typography component="h1" variant="h5" color="black">
                    Dashboard
                </Typography>
            </Grid>
            
            {/* message icon */}
            <Grid item container md={6.5} sx={{mt:-1}}>
            <Grid item
                xs={0.5}
                sm={0.5}
                md={0.8}
                sx={{marginLeft:45, marginRight:1, mt:0.5}}>
                <IconButton component={Link} to="/Error">
                    <MessageIcon style={{fontSize:34}}/>
                </IconButton>
                
            </Grid>

            {/* notification icon */}
            <Grid item
                xs={0.5}
                sm={0.5}
                md={0.8}
                sx={{mt:0.2}}
                >
                <IconButton component={Link} to="/Error">
                    <NotificationsActiveIcon style={{fontSize:34}}/>
                </IconButton>    
                    
            </Grid>
            {/* user icon */}
            <Grid item
                xs={0.5}
                sm={0.5}
                md={1} sx={{ml:1}} >
                    <IconButton component={Link} to="/Profile">
                    <PersonIcon 
                style={{fontSize:34}}/>
                    </IconButton>
                
            </Grid>
            <Grid item container direction="column" md={1} sx={{mt:1}}>
                <Grid item>
                    <Typography component="h1" variant="h5" color="black" style={{fontSize:12}}>
                        John Doe
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography component="h1" variant="h5" color="black" style={{fontSize:12, color:"brown"}}>
                        Candidate
                    </Typography>
                </Grid>
            </Grid>
            <Grid item
                xs={0.5}
                sm={0.5}
                md={1}
                sx={{mt:0.5}}>
                    
                {/*<ReorderIcon style={{fontSize:34}}/>*/}
                <ProfileDropdown/>
            </Grid>
            </Grid>
        </Grid>

    );
}
