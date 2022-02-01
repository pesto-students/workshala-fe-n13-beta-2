import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import IconRa from "../Images/react.jpg";
import {Avatar, Button, CardActions, Grid} from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const label = {
    inputProps: {
        "aria-label": "Salary"
    }
};
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
    return (
      <Grid container>
        <Grid item container md={12}>
            <Grid item
                md={2}
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
                md={8}>
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
