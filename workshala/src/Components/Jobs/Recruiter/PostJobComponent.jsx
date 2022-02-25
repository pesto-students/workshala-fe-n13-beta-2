import React from "react";

import {
  Button,
  Divider,
  Grid,
  Typography,
  TextField,
  Paper,
  Chip,
  Box
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch } from "react-redux";
import {postJob} from "../../../redux/actions/jobs";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider, useFormContext} from "react-hook-form";

const FormItems = [
  {
    first: "Job Title",
    second: "Description",
    third: "Qualification",
  },
  {
    first: "Max Salary",
    second: "Min Salary",
    third: "Email",
  },
  {
    first: "Job Type",
    second: "Location",
    third: "Exp required",
  },
];

const FormItemsTwo = [
  {
    first: "Job Requirements*",
    second: "Number of Openings",
  },
];

const suggestions = [
  {
    label: "Two wheeler license",
    color: "primary",
  },
  {
    label: "Adhar Card",
    color: "success",
  },
  {
    label: "Smart Phone",
    color: "success",
  },
];

const RadioItems = [
  {
    title: "Type of Job",
    second: "Full Time",
    third: "Part Time",
  },
  {
    title: "Gender",
    second: "Male",
    third: "Female",
  },
  {
    title: "Experience Required",
    second: "Fresher",
    third: "Experienced",
  },
];

const TileRow = (props) => {
  //const {register} = useFormContext();
  return (
    <Grid item container sx={{ mt: 2 }} md={12}>
    <Grid item md={4}>
      <TextField
        sx={{
          width: 240,
          marginLeft: 3,
        }}
        required
        id={props.item.first}
        label={props.item.first}
        // value={!isEmpty(jobDetails) ? jobDetails.title : ""}
        variant="standard"
        //{...register(item.first, { required: true, maxLength: 30 })}
      />
    </Grid>
    <Grid item md={4}>
      <TextField
        sx={{ width: 240 }}
        required
        id={props.item.second}
        label={props.item.second}
        variant="standard"
        //{...register(props.item.second, { required: true, maxLength: 30 })}
      />
    </Grid>
    <Grid item md={4}>
      <TextField
        sx={{ width: 240, marginLeft: -3 }}
        required
        id={props.item.third}
        label={props.item.third}
        variant="standard"
        //{...register(props.item.third, { required: true, maxLength: 30 })}
      />
    </Grid>
  </Grid>
  );
}

const RadioButtonTIle = (props) => {
  //const {control} = useFormContext();
  return (
    <Grid item container sx={{ mt: 2 }} md={12} >
      <Grid item md={4}>
      <FormControl>
        <FormLabel id={props.item.title}>{props.item.title}</FormLabel>
        <RadioGroup
          aria-labelledby={props.item.title}
          defaultValue=""
          name="radio-buttons-group"
        >
            <FormControlLabel value={props.item.second} control={<Radio />} label={props.item.second} />
            <FormControlLabel value={props.item.third} control={<Radio />} label={props.item.third} />
        </RadioGroup>
      </FormControl>
    </Grid>
  </Grid>
  );
}

export default function PostjobComponent (props) {
  const navigate = useNavigate();
  
  const methods = useForm();
  const { register, handleSubmit, control } = methods;
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const payload = {
      ...data,

      navigation: navigate,
    };

    dispatch(postJob(payload));
  };

  return (
    <Grid container>
      <Grid item container md={12}>
        <Box sx={{ width: 1, bgcolor: "white" , p:2, borderRadius:8}}>
        <FormProvider {...methods} >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Paper elevation={0}>
              <Grid item>
                <Typography style={{ fontWeight: 650, fontSize: 22 }} sx={{ mt: 1, p: 3 }}>
                  Basic Details
                </Typography>
              </Grid> 
              {/* <FormInput /> */}
              <Grid item md={12} xs={12} sm={12}>
                {FormItems.map((item, i) => (
                    <TileRow item={item} key={i}/>
                ))}
              </Grid>
              {/* <JobType /> */}
              <Grid item md={12} xs={12} sm={12} sx={{ mt: 3, ml: 3 }}>
                {RadioItems.map((item, i) => (
                    <RadioButtonTIle item={item} key={i}/>
                ))}
              </Grid>

              <Divider sx={{ m: 3 }} />
              <Grid item>
                <Typography sx={{ mt: 2, ml: 3 }}>
                  Please select assets/documents required from candidates to apply
                </Typography>
              </Grid>
              <Grid item container md={12} spacing={1} sx={{ml:1}}>
                <Grid item sx={{ mt: 2 }} xs={5} sm={5} md={5}>
                  <Grid>
                    {suggestions.map((item, i) => (
                      <Chip key={i} label={item.label} color={item.color} sx={{ ml: 1 }}/>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={12} xs={12} sm={12} sx={{ ml: 1 }}>
                  <Grid item container sx={{ mt: 4 }} md={12}>
                    <Grid item md={6}>
                      <TextField sx={{ width: 350, marginLeft: 3}}
                        required id={"Job Requirements"} label={"Job Requirements"} variant="standard"
                        {...register("Job Requirements", { required: true, maxLength: 30 })}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <TextField sx={{ width: 350 }} required id={"Number of Openings"} label={"Number of Openings"} variant="standard"
                        {...register("Number of Openings", { required: true, maxLength: 30})}
                      />
                    </Grid>
                  </Grid>
                ))
              </Grid>
              <Grid item container md={12} style={{justifyContent:"center"}} sx={{m:4}}>
              <Grid item sm={6} md={1.5} style={{ textAlign: "center" }}>
                <Button variant="contained" type="submit" sx={{ width: "120px", marginLeft: "0 auto", borderRadius: 4, display: "flex"}}>
                  Save
                </Button>
              </Grid>
              <Grid item sm={6} md={1.5} style={{ textAlign: "center" }}>
                <Button variant="contained" sx={{ width: "120px", marginLeft: "0 auto", borderRadius: 4, display: "flex"}}>
                  Cancel
                </Button>
              </Grid>
              </Grid>
            </Paper>
          </form>
          </FormProvider>
        </Box>
      </Grid>
    </Grid>
  );
};