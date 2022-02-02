import * as React from "react";
import SegmentIcon from '@mui/icons-material/Segment';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';

import {
    Grid,
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

            <Grid item xs={2} sm={2} md={2}>
                <Typography component="h1" variant="h5" color="black">
                    Dashboard
                </Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={3}>

            </Grid>

            
            {/* message icon */}
            
            <Grid item
                xs={0.5}
                sm={0.5}
                md={0.5}
                sx={{marginLeft:45, mt:0.4, marginRight:1}}>
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
                md={0.5} sx={{ml:3}}>
                <PersonIcon style={{fontSize:34}}/>
            </Grid>
            <Grid item container direction="column" md={0.8}>
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
        </Grid>

    );
}
