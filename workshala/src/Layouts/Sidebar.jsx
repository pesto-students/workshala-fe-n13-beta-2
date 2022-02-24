import * as React from "react";
import {Link} from 'react-router-dom';
import {Typography, Box, Grid, Drawer, Paper} from "@mui/material";
import {makeStyles} from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo from "../Assets/Images/logo.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import SegmentIcon from '@mui/icons-material/Segment';

const useStyles = makeStyles({
    root: {
        width: "100%",
        maxWidth: 360
    }
})

const SideMenuItems = [
    {
        title: 'Dashboard',
        icon: <HomeOutlinedIcon color="secondary"/>,
        to: '/candidate/dashboard',
        click: ''
    },
    {
        title: 'Jobs',
        icon: <BusinessCenterOutlinedIcon color="secondary"/>,
        to: '/candidate/jobs',
        click: ''
    },
    {
        title: 'Applications',
        icon: <AppsOutlinedIcon color="secondary"/>,
        to: '/candidate/applications',
        click: ''
    },
    {
        title: 'Message',
        icon: <MessageOutlinedIcon color="secondary"/>,
        to: '/candidate/message',
        click: ''
    }, {
        title: 'Statistics',
        icon: <StackedBarChartOutlinedIcon color="secondary"/>,
        to: '/candidate/statistics',
        click: ''
    }, {
        title: 'News',
        icon: <NewspaperOutlinedIcon color="secondary"/>,
        to: '/candidate/news',
        click: ''
    }
]

export default function SideBar({dashBoardSideNavOpen, dashBoardSideNavToggle, dashBoardSideNavClose}) {
    const classes = useStyles();
    const [selectedIndex] = React.useState(1);
    const [open, setOpen] = React.useState(true);
    

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    return (
        
        <Drawer variant="persistent" anchor="left" open={dashBoardSideNavOpen}
        onClose={dashBoardSideNavToggle} PaperProps={{ elevation: 10 }}>
            
            <Grid container
                sx={
                    {
                        width: 270,
                        //border:1,
                        boxShadow:1,
                        height: '100%',
                        backgroundColor: "#EDEAEA"
                    }
                }
                alignContent={"start"}>
                <Grid item
                    xs={12}
                    sm={12}
                    md={12}>
                    <Grid container
                        sx={
                            {
                                mx: 4,
                                mt: 2
                            }
                    }>
                        <Grid item
                            xs={3}
                            sm={3}
                            md={3}>
                            <Box component="img"
                                sx={
                                    {
                                        height: 70,
                                        width: 70,

                                        mt: 2,
                                        marginRight: 0
                                    }
                                }
                                alt="Logo"
                                src={logo}/>
                        </Grid>
                        <Grid item
                            xs={9}
                            sm={9}
                            md={6}>
                            <Typography component="h1" variant="h5" color="Black"
                                sx={
                                    {
                                        mt: 4,
                                        mx: 1,
                                        marginRight: 0
                                    }
                            }>
                                Workshala
                            </Typography>
                        </Grid>
                        
                    </Grid>
                </Grid>
                <Grid item
                    xs={3}
                    sm={3}
                    md={3}
                    sx={
                        {
                            mt: 3,
                            mx: 2
                        }
                    }
                    className={
                        classes.root
                }>
                    <List component="nav" aria-label="main menu list"

                        sx={
                            {
                                p: 3,
                                mt: 5
                            }
                    }>
                        {
                        SideMenuItems.map((item, i) => (
                            <ListItem key={i} button
                                component={Link}

                                to={
                                    item.to
                                }
                                key={
                                    item.title
                                }
                                classes={
                                    {root: useStyles.listItem}
                                }
                                selected={
                                    selectedIndex === 0
                            }>
                                <ListItemIcon> {
                                    item.icon
                                } </ListItemIcon>
                                <ListItemText primaryTypographyProps={
                                        {fontSize: '22px'}
                                    }
                                    primary={
                                        item.title
                                    }/>
                            </ListItem>
                        ))
                    } </List>
                </Grid>
            </Grid>
            
        </Drawer>
        

    );
}