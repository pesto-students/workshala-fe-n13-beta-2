import * as React from "react";
import SegmentIcon from "@mui/icons-material/Segment";
import ProfileDropdown from "../Layouts/ProfileDropdown";
import { Link } from "react-router-dom";
import { Grid, IconButton, Typography, Button, Paper } from "@mui/material";
import { useSelector } from 'react-redux';
import { isEmpty } from "../Services/Utils/Generic";
import Loader from '../Services/Utils/Loader'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import {fetchProfile} from '../redux/actions/user'

export default function Header({ dashBoardSideNavToggle }) {

  const [data, setData] = useState(null);  
  const user = useSelector(state => state.user);
  const userInfo = useSelector(state => state.userInfo);

  const dispatch = useDispatch();

  React.useEffect(() => {   
  
    if(user !== undefined && user.user !== undefined && user.user.data !== undefined) {

      const userData = user.user.data;

      setData ( {
        Role: userData.role
      });

      if(isEmpty(userInfo.userInfo)) {
        dispatch(fetchProfile());
      }
    }  
  }, []);       // eslint-disable-line react-hooks/exhaustive-deps

    
  var profileData = [];
  
  if(data && userInfo !== undefined && userInfo.userInfo !== undefined 
    && userInfo.userInfo.status && userInfo.userInfo.data !== undefined 
              && userInfo.userInfo.data.result !== undefined) {
    
    const userData = userInfo.userInfo.data.result[0];
    
    profileData = {
                      ...data,
                      Name: userData.firstName + " " + userData.lastName
                  }
  
  return (
    <Paper elevation={1} sx={{backgroundColor: "#EDEAEA"}} >
    <Grid container sx={{ mt: 2, height: "7vh" }}>
      {/* icon */}
      <Grid item xs={0.3} sm={0.3} md={1}>
        <IconButton onClick={dashBoardSideNavToggle}>
          <SegmentIcon />
        </IconButton>
      </Grid>

      <Grid item md={11} container justifyContent={"flex-end"} spacing={2}>
        {profileData.Role === "candidate" ? <></> : 
        <Grid item md={2.5}>
          <Button
            component={Link}
            to="/postjob"
            variant="contained"
            sx={{
              width: "120px",
              marginLeft: "0 auto",
              borderRadius: 4,
              display: "flex",
              mt: 1,
            }}
          >
            Post Job
          </Button>
        </Grid>}
        {/* <Grid item md={0.8}>
          <IconButton component={Link} to="/error" sx={{ mt: 0.5 }}>
            <MessageIcon style={{ fontSize: 34 }} />
          </IconButton>
        </Grid>

        <Grid item md={0.8}>
          <IconButton component={Link} to="/profile">
            <PersonIcon style={{ fontSize: 34 }} />
          </IconButton>
        </Grid>

        {/* notification icon 
        <Grid item md={0.8}>
            <IconButton component={Link} to="/error">
                <NotificationsActiveIcon style={{fontSize:34}}/>
            </IconButton>
        </Grid> 
            
        <Grid item md={0.8}>
            <IconButton component={Link} to="/profile">
                <PersonIcon style={{fontSize:34}}/>
            </IconButton>
        </Grid>*/}
                    
        <Grid item container direction="column" sx={{mt:0.5}} md={1.4}>
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
                <Grid item md={0.8}>
                    {/*<ReorderIcon style={{fontSize:34}}/>*/}
                    <ProfileDropdown/>
                </Grid>                
            </Grid>
        </Grid>
        </Paper>
    );
  } else {
    return (<Loader/>);                   // TODO: use skeleton
  }
}
