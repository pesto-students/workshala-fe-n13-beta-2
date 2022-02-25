import * as React from "react";
import WorkIcon from '@mui/icons-material/Work';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

import {
    Grid,
    Typography,
    CardContent,
    Card
} from "@mui/material";
import {blue} from "@mui/material/colors";

const tileItems = [
    {
        logo: <WorkIcon style={{ fontSize: 40}}/>,
        title: 'Interviews Scheduled',
        content: '19'
    }, {
        logo: <AppsOutlinedIcon style={{ fontSize: 40 }}/>,
        title: 'Applications Sent',
        content: '51'
    }, 
    // {
    //     logo: <ContactPageIcon style={{ fontSize: 40 }}/>,
    //     title: 'Profile Viewed',
    //     content: '48,340'
    // }, {
    //     logo: <EmailIcon style={{ fontSize: 40 }}/>,
    //     title: 'Unread Message',
    //     content: '47'
    // }
]

const CardTemplate = (props) => {
    return (
        <Card style={{backgroundColor: "#88B3F4"}} sx={
            {
                
                border: 0,
                
                
                color: blue,
                borderRadius: 8
            }
        }>
            <CardContent sx={{p:1}}>
                <Grid container  >
                    
                    <Grid item xs={10} sm={10} md={9} sx={{mt:3}}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography 
                                    fontSize={15}
                                    color={"white"}
                                    sx={{mx:2.5}}
                                    align={"left"}>
                                    
                                    {props.title} 
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography sx={
                                        {
                                            fontSize: 25,
                                            color: "white",
                                            mx:2.5
                                        }
                                    }
                                    align={"left"}>
                                    {props.content} 
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} sx={{mt:2}} >
                        {props.logo}
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    );
};

export default function TopContent() {
    return (
        <Grid container spacing={1}
            alignItems={"center"}
            justifyContent={"center"}>
            {
            tileItems.map((item, i) => (
                <Grid item key={i} style={{width:"50%"}}>
                    <CardTemplate logo={
                            item.logo
                        }
                        title={
                            item.title
                        }
                        content={
                            item.content
                        }/>
                </Grid>
            ))
        } </Grid>
    );
}