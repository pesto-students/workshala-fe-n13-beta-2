import * as React from "react";
import {
    Button,
    Grid,
    Divider,
    Switch,
    Typography,
    TextField,
    Paper
} from "@mui/material";

import ProfileInfo from '../Components/Dashboard/ProfileInfo';
import CandidateLayout from "../Layouts/CandidateLayout";

const FormItems = [
    {
        textField: false,
        first: 'Basic'
    },
    {
        textField: true,
        first: 'First Name',
        second: 'Middle Name',
        third: 'Last Name'
    },
    {
        textField: true,
        first: 'Username',
        second: 'Password',
        third: 'Re-type Password'
    },
    {
        textField: false,
        first: 'Contact'
    },
    {
        textField: true,
        first: 'Mobile',
        second: 'Whatsapp',
        third: 'Email'
    },
    {
        textField: true,
        first: 'Address',
        second: 'City',
        third: 'Country'
    }, 
    {
        textField: false,
        first: 'Skills'
    },
    {
        textField: true,
        first: 'Skill',
        second: 'Experience',
        third: 'Last used'
    }
]
const label = {
    inputProps: {
        'aria-label': 'Available for Hire'
    }
};

const CreateForm = (props) => {
    return (
        <Paper sx={
            {
                mt: 1,
                mx: 2.5,
                border: 0,
                width: 820,
                height: 620,
                borderRadius: 4
            }
        }>
            <Grid container>
                <Grid item
                    md={12}>
                    <Grid container
                        md={12}>
                        <Grid item
                            md={4}
                            sx={
                                {
                                    mt: 4,
                                    marginLeft: 3
                                }
                        }>
                            <Typography style={
                                {fontWeight: 600}
                            }>
                                Edit Profile
                            </Typography>
                        </Grid>
                        <Grid item
                            sx={
                                {mt: 4}
                            }
                            md={1.8}>
                            <Typography style={
                                {
                                    color: "#0000ff",
                                    fontSize: 16
                                }
                            }>
                                Available for hire
                            </Typography>
                        </Grid>
                        <Grid item
                            sx={
                                {mt: 3}
                            }
                            md={2.2}>
                            <Switch {...label}/>
                        </Grid>
                        <Grid item
                            sx={
                                {
                                    mt: 3,
                                    marginLeft: 1
                                }
                            }
                            md={1.5}>
                            <Button variant="contained"
                                sx={
                                    {
                                        width: '100px',
                                        borderRadius: 4
                                    }
                            }>
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item
                            sx={
                                {mt: 3}
                            }
                            md={2}>
                            <Button variant="contained"
                                sx={
                                    {
                                        width: '100px',
                                        marginLeft: 1,
                                        borderRadius: 4
                                    }
                            }>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                


                <Grid item
                    md={12}
                    xs={12}
                    sm={12}>

                    {
                    FormItems.map((item, i) => (
                        item.textField ?  
                        <Grid container
                            sx={
                                {mt: 2}
                            }
                            md={12}>
                            <Grid item
                                md={4}>
                                <TextField sx={
                                        {
                                            width: 240,
                                            marginLeft: 3
                                        }
                                    }
                                    required
                                    id={
                                        item.first
                                    }
                                    label={
                                        item.first
                                    }
                                    defaultValue={
                                        item.first
                                    }/>
                            </Grid>
                            <Grid item
                                md={4}>
                                <TextField sx={
                                        {width: 240}
                                    }
                                    required
                                    id={
                                        item.second
                                    }
                                    label={
                                        item.second
                                    }
                                    defaultValue={
                                        item.second
                                    }/>
                            </Grid>
                            <Grid item
                                md={4}>
                                <TextField sx={
                                        {width: 240, marginLeft:-3}
                                    }
                                    required
                                    id={
                                        item.third
                                    }
                                    label={
                                        item.third
                                    }
                                    defaultValue={
                                        item.third
                                    }/>
                            </Grid>
                        </Grid>
                        :
                        <Grid container>
                        <Grid item
                            md={0.8}
                            sx={
                                {
                                    marginLeft: 3,
                                    mt: 4
                                }
                        }>
                            <Typography style={
                                {fontWeight: 550}
                            }>
                                {item.first}
                            </Typography>
                        </Grid>
                        <Grid item
                            md={10.3}
                            sx={
                                {mt: 5.5}
                        }>
                            <Divider/>
                        </Grid>
                    </Grid>

                    ))
                } </Grid>

            </Grid>

        </Paper>
    );
}

export default function Profile() {
    return (

        <CandidateLayout>
            <Grid container>
                <Grid item
                    xs={6}
                    sm={6}
                    md={8.5}>

                    <CreateForm/>

                </Grid>
                <Grid item
                    xs={6}
                    sm={6}
                    md={3.5}>
                    <ProfileInfo wide={"270px"}
                        high={"620px"}/>
                </Grid>
            </Grid>

        </CandidateLayout>
    );
}
