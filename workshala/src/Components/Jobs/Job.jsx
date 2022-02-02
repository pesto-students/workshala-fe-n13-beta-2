import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import IconRa from "../../Assets/Images/react.jpg";
import {Avatar, Button, CardActions, Grid, Select, MenuItem, 
TextField,
InputAdornment} from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const jobsList = [
    {
        title: "ABC company",
        subTitle: "Home Food Delivery",
        exp: "3 - 5 Years"
    }, {
        title: "ABC company",
        subTitle: "Home Food Delivery",
        exp: "3 - 5 Years"
    }, {
        title: "ABC company",
        subTitle: "Home Food Delivery",
        exp: "3 - 5 Years"
    },{
      title: "ABC company",
      subTitle: "Home Food Delivery",
      exp: "3 - 5 Years"
  }, {
      title: "ABC company",
      subTitle: "Home Food Delivery",
      exp: "3 - 5 Years"
  }, {
      title: "ABC company",
      subTitle: "Home Food Delivery",
      exp: "3 - 5 Years"
  },{
    title: "ABC company",
    subTitle: "Home Food Delivery",
    exp: "3 - 5 Years"
}, {
    title: "ABC company",
    subTitle: "Home Food Delivery",
    exp: "3 - 5 Years"
}, {
    title: "ABC company",
    subTitle: "Home Food Delivery",
    exp: "3 - 5 Years"
}

];

const suggestions = [
    {
        label: "Technician",
        color: "primary"
    }, {
        label: "Mechanic",
        color: "success"
    }, {
        label: "Delivery Boy",
        color: "success"
    }, {
        label: "Builder",
        color: "success"
    }
]

const CardTemplate = (props) => {
    return (
        <Card sx={
            {
                maxWidth: 445,
                borderRadius: 8,
                width: 280
            }
        }>
            <CardContent>
                <Avatar src={IconRa}/>
                <Typography gutterBottom variant="h6" align="center">
                    {
                    props.title
                } </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    {
                    props.subTitle
                } </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    {
                    props.exp
                } </Typography>
            </CardContent>

            <CardActions>
              <Grid container>
                <Grid item md={12} align={"center"}>
                <Button size="small" color="primary"  variant="contained"
                    style={{width:100}}>
                    Apply
                </Button>
                </Grid>
                <Grid item md={12} align="right">
                <Button size="small" color="primary" 
                    style={{fontSize:9}}>
                    View more
                </Button>
                </Grid>
              </Grid>
            </CardActions>
        </Card>
    );
};



function Job() {
    const [sort, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return (
      <Grid container>

        {/* Search bar */}
        <Grid item md={12} >
                <TextField sx={{width:"96%", m:1,p:1, 
                borderRadius:4, backgroundColor:"white", border:0, borderColor:"white"}} size="small" border={0} borderColor="white"
                placeholder="Search by Title, company or keyword..."
                variant="standard"
                    InputProps={
                        {
                            endAdornment: (
                                <InputAdornment>
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
                <Stack direction="colunm">
                    {
                    suggestions.map(item => (
                        <Chip label={
                                item.label
                            }
                            color={
                                item.color
                            }
                            sx={
                                {ml: 1}
                            }/>
                    ))
                } </Stack>
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
                <Grid item container md={12} spacing={1} sx={
                    {mt: 2}
                }>
                  {jobsList.map((item) => (
                    <Grid item
                        >
                        <CardTemplate title={
                                item.title
                            }
                            subTitle={
                                item.subTitle
                            }
                            exp={
                              item.exp
                            }/>
                  </Grid>
                  ))}
                </Grid>
              </Grid>
    );
}

export default Job;
