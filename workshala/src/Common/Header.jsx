import * as React from "react";
import logo from "../Images/logo.png";
import SegmentIcon from '@mui/icons-material/Segment';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';

import {
    Grid,
    IconButton,
    TextField,
    Typography,
    InputAdornment
} from "@mui/material";
import { fontSize } from "@mui/system";

export default function DashHead() {
    return (

        <Grid container sx={{mt:3, p:2}}>
            {/* icon */}
            <Grid item
                xs={0.3}
                sm={0.3}
                md={0.3} sx={{mt:0.5}}>
                <SegmentIcon />
            </Grid>

            {/* Dashboard */}

            <Grid item xs={2} sm={2} md={2}>
                <Typography component="h1" variant="h5" color="black">
                    Dashboard
                </Typography>
            </Grid>

            {/* Search bar */}
            <Grid item xs={3.7} sm={3.7} md={3.7} >
                <TextField label="Search for Jobs here..." sx={{width:"300px", marginLeft:35}} size="small"
                    InputProps={
                        {
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon/>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }
                    }/>
            </Grid>
            {/* message icon */}
            
            <Grid item
                xs={0.5}
                sm={0.5}
                md={0.5}
                sx={{marginLeft:45, mt:0.4, marginRight:2}}>
                <MessageIcon style={{fontSize:34}}/>
            </Grid>

            {/* notification icon */}
            <Grid item
                xs={0.5}
                sm={0.5}
                md={0.5}
                >
                <NotificationsActiveIcon style={{fontSize:34}}/>
            </Grid>
            {/* user icon */}
            <Grid item
                xs={0.5}
                sm={0.5}
                md={0.5}
                sx={{ mx:3}}>
                <PersonIcon style={{fontSize:34}}/>
            </Grid>
        </Grid>

    );
}
