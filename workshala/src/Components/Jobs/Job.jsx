import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconRa from "../../Assets/Images/react.jpg";
import {Avatar, Button, CardActions, Grid, Select, MenuItem, 
TextField, Chip, Stack, Typography, CardContent, InputAdornment, Card, CardActionArea} from "@mui/material";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {isEmpty} from '../../Services/Utils/Generic'
import getJobsList from '../../redux/actions/jobs'
import Loader from '../../Services/Utils/Loader'

var jobsList;

export const updateJobList = (data) => {    
    data.forEach(function (k, i) {
        jobsList[i] = {title: data[i].title, desc: data[i].desc, experience: data[i].experience};
    });
    console.log(jobsList);
}

const suggestions = [
  {
    label: "Technician",
    color: "primary",
  },
  {
    label: "Mechanic",
    color: "success",
  },
  {
    label: "Delivery Boy",
    color: "success",
  },
  {
    label: "Builder",
    color: "success",
  },
];

const CardTemplate = (props) => {
  return (
    <Card sx={{ borderRadius: 8, p: 2 }}>
      <CardActionArea onClick={props.click}>
        <CardContent align="center">
          <Avatar src={IconRa} />
          <Typography gutterBottom variant="h6">
            {props.title}{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.subTitle}{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.exp}{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container>
          <Grid item md={12} align={"center"}>
            <Button
              size="small"
              color="primary"
              variant="contained"
              style={{ width: 100 }}
              component={Link}
              to="/ApplyJob"
            >
              Apply
            </Button>
          </Grid>
          <Grid item md={12} align="right" sx={{ mt: 5 }}>
            <Button
              size="small"
              color="primary"
              style={{ fontSize: 9 }}
              component={Link}
              to="/CompanyDetails"
            >
              View more
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

const SearchBar = () => {
    return (
        <Grid item md={12} >
        <TextField sx={{width:"96%", m:1,p:1, 
        borderRadius:4, backgroundColor:"white", border:0}} size="small" border={0}
        placeholder="Search by Title, company or keyword..."
        variant="standard"
            InputProps={
                {
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button variant="contained" sx={{width:100, borderRadius:4}}
                                                        startIcon={<SearchIcon />}>
                                Find
                            </Button>
                            
                        </InputAdornment>
                    ),
                    disableUnderline: true
                }
            }/>
    </Grid>
    );
}

export default function Job({quickViewToggle, quickViewClose, quickViewOpen}) {
    const [sort, setValue] = React.useState('');

    const dispatch = useDispatch();

    const jobsInfo = useSelector(state => state.jobs);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
        
    React.useEffect(() => {
        dispatch(getJobsList());
    }, [])

    //if(jobsInfo != undefined && isEmpty(jobsInfo.jobs) && !jobsInfo.status) {
      //  dispatch(getJobsList());
    //}
    var jobsList = [];
    
    if(jobsInfo.loading) {
        return (
                <Loader/>
            );
    } else {

        if(jobsInfo != undefined && jobsInfo.status && jobsInfo.jobs != undefined && jobsInfo.jobs.data != undefined 
            && jobsInfo.jobs.data.results != undefined) {
            const data = jobsInfo.jobs.data.results;
            data.forEach(function (k, i) {
                jobsList[i] = {title: data[i].title, desc: data[i].desc, experience: data[i].experience};
            });
            console.log(jobsList);
           // UpdateData(userData);
        }


        return (
            <Grid container direction={"column"}>
      <Grid item container>
        {/* Search bar */}
        <SearchBar/>

        <Grid item container md={12}>
            <Grid item
                md={1.5}
                sx={
                    {
                        ml: 2,
                        mt: 3
                    }
            }>
                <Typography>Suggestions</Typography>
            </Grid>
            <Grid item
                sx={
                    {mt: 2}
                }
                xs={0.5}
                sm={0.5}
                md={5}>
                
                    {
                    suggestions.map((item, i) => (
                        <Chip key={i} label={
                                item.label
                            }
                            color={
                                item.color
                            }
                            sx={
                                {ml: 1}
                            }/>
                    ))
                } 
            </Grid>
            <Grid item
                sx={
                    {mt:2}
                }
                xs={0.5}
                sm={0.5}
                md={5} align="right">
                    
                <Select sx={{height:35, width:120, borderRadius:4}}
                        value={sort}    displayEmpty
                        onChange={handleChange}>
                    <MenuItem value="">Newest</MenuItem>
                    <MenuItem value="Oldest">Oldest</MenuItem>
                </Select>
            </Grid>
        </Grid>
        </Grid>
        <Grid item container >
                <Grid item container md={12} spacing={1} sx={{mt: 2}}>
                  {jobsList ? (jobsList.map((item, i) => (
                    <Grid item key={i}
                        >
                        <CardTemplate title={
                                item.title
                            }
                            subTitle={
                                item.desc
                            }
                            exp={
                              item.experience
                            }
                            click={quickViewToggle}
                            />
                  </Grid>
                  ))) : <></>}
                </Grid>
    </Grid>
    </Grid>
    );
    }
};
