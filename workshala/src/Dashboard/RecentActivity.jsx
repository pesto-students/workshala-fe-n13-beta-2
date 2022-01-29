import * as React from "react";
import jobs from "../Images/jobs.png";
import manageJobs from "../Images/manageJobs.png";
import expert from "../Images/expert.jpeg";
import career from "../Images/career.jpeg";
import CardMedia from '@mui/material/CardMedia';
import user2 from '../Images/user2.jpeg'
import whatsapp from '../Images/whatsapp.png'
import Phone_icon from '../Images/Phone_icon.png'
import email from '../Images/email.png'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
    Grid,
    Typography,
    CardContent,
    Card,
    Avatar
} from "@mui/material";
import {getThemeProps} from "@mui/system";

const RecentData = {
    Action: "You have applied for mechanic post in ABC company",
    When: "12h ago"
}

export default function LeftContent() {
    return (
        <Card sx={
            {
                mt: 1,
                mx: 3.5,
                border: 0,
                width: 270,
                height: 180,
                borderRadius: 4
            }
        }>
            
            <CardContent>
                <Typography 
                    sx={{p:1}}
                    fontSize={16}
                    style={
                        {fontWeight: 600}
                    }
                    align="left">
                    
                    {"Recent Activities"}
                 </Typography>

                <Grid container sx={
                            {p:2}
                    } >
                    <Grid item
                        xs={3}
                        sm={3}
                        md={3}
                      >
                        <AppsOutlinedIcon/>

                    </Grid>
                    <Grid item
                        xs={9}
                        sm={9}
                        md={9}
                    >
                        {
                            RecentData.Action
                        }
                     </Grid>
                </Grid>
                <Typography variant="h5"
                    fontSize={13}
                    sx={{mx:8}}
                    style={
                        {fontWeight: 600}
                    }
                    >
                    {RecentData.When}
                 </Typography>
            </CardContent>
        </Card>
    );
}
