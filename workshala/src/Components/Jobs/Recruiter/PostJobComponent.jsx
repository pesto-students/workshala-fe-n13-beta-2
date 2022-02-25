import React from "react";

import {
  Button,
  Divider,
  Grid,
  Typography,
  TextField,
  Paper,
  Chip,
  Box,
  Stack,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch } from "react-redux";
import postJob from "../../../redux/actions/postJob";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

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
    first: "Type of Job",
    second: "Full Time",
    third: "Part Time",
  },
  {
    first: "Gender",
    second: "Male",
    third: "Female",
  },
  {
    first: "Experience Required",
    second: "Fresher",
    third: "Experienced",
  },
];
let jobDetails = [];
export const UpdateJobDetails = (data) => {
  console.log(data);

  jobDetails = { Title: data.title };
};
const PostjobComponent = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const payload = {
      ...data,

      navigation: navigate,
    };

    // React.useEffect(() => {
    dispatch(postJob(payload));
    // }, []);
  };

  return (
    <Grid container direction="row" spacing={1}>
      <Grid item md={12} sx={{ mt: 2 }} spacing={1}>
        <Box
          sx={{
            width: 1,
            maxWidth: "90%",
            height: "100vh",
            bgcolor: "white",
            borderRadius: 20,
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Paper elevation={0}>
              <Grid item>
                <Typography
                  style={{ fontWeight: 650, fontSize: 22 }}
                  sx={{ mt: 1, p: 3 }}
                >
                  Basic Details
                </Typography>
              </Grid>
              {/* <FormInput /> */}
              <Grid item md={12} xs={12} sm={12}>
                {FormItems.map((item, i) => (
                  <Grid item container sx={{ mt: 2 }} md={12}>
                    <Grid item md={4}>
                      <TextField
                        sx={{
                          width: 240,
                          marginLeft: 3,
                        }}
                        required
                        id={item.first}
                        label={item.first}
                        // value={!isEmpty(jobDetails) ? jobDetails.title : ""}
                        variant="standard"
                        {...register(item.first, {
                          required: true,
                          maxLength: 30,
                        })}
                      />
                    </Grid>
                    <Grid item md={4}>
                      <TextField
                        sx={{ width: 240 }}
                        required
                        id={item.second}
                        label={item.second}
                        variant="standard"
                        {...register(item.second, {
                          required: true,
                          maxLength: 30,
                        })}
                      />
                    </Grid>
                    <Grid item md={4}>
                      <TextField
                        sx={{ width: 240, marginLeft: -3 }}
                        required
                        id={item.third}
                        label={item.third}
                        variant="standard"
                        {...register(item.third, {
                          required: true,
                          maxLength: 30,
                        })}
                      />
                    </Grid>
                  </Grid>
                ))}{" "}
              </Grid>
              {/* <JobType /> */}
              <Grid
                item
                md={12}
                xs={12}
                sm={12}
                direction="column"
                sx={{ mt: 3, ml: 3 }}
              >
                {RadioItems.map((item, i) => (
                  <Grid
                    item
                    container
                    sx={{ mt: 2 }}
                    md={12}
                    direction="column"
                  >
                    <Grid item md={4}>
                      <FormControl>
                        <FormLabel id={item.first}>{item.first}</FormLabel>
                        <Controller
                          name={item.first}
                          render={( field ) => (
                            <RadioGroup
                              row
                              name="row-radio-buttons-group"
                              aria-label="jobType"
                              {...field}
                            >
                              <FormControlLabel
                                value={item.second}
                                control={<Radio />}
                                label={item.second}
                                // {...register(item.second, { required: true })}
                              />
                              <FormControlLabel
                                value={item.third}
                                control={<Radio />}
                                label={item.third}
                                // {...register(item.third, { required: true })}
                              />
                            </RadioGroup>
                          )}
                         control={control}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                ))}{" "}
              </Grid>

              <Divider sx={{ m: 3 }} />

              <Typography sx={{ mt: 2, ml: 3 }}>
                Please select assets/documents required from candidates to apply
              </Typography>
              <Grid
                item
                container
                md={12}
                direction="row"
                spacing={1}
                sx={{ ml: 3 }}
              >
                <Grid item sx={{ mt: 2 }} xs={5} sm={5} md={5}>
                  <Stack direction="colunm">
                    {suggestions.map((item, i) => (
                      <Chip
                        key={i}
                        label={item.label}
                        color={item.color}
                        sx={{ ml: 1 }}
                      />
                    ))}{" "}
                  </Stack>
                </Grid>
              </Grid>
              {/* <FormInputTwo /> */}
              <Grid item md={12} xs={12} sm={12} sx={{ ml: 1 }}>
                {FormItemsTwo.map((item, i) => (
                  <Grid item container sx={{ mt: 4 }} md={12}>
                    <Grid item md={6}>
                      <TextField
                        sx={{
                          width: 350,
                          marginLeft: 3,
                        }}
                        required
                        id={item.first}
                        label={item.first}
                        variant="standard"
                        {...register(item.first, {
                          required: true,
                          maxLength: 30,
                        })}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <TextField
                        sx={{ width: 350 }}
                        required
                        id={item.second}
                        label={item.second}
                        variant="standard"
                        {...register(item.second, {
                          required: true,
                          maxLength: 30,
                        })}
                      />
                    </Grid>
                  </Grid>
                ))}{" "}
              </Grid>

              <Grid
                container
                sx={{ mt: 5 }}
                md={12}
                sm={12}
                md={12}
                style={{ textAlign: "center" }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    width: "100px",
                    marginLeft: "0 auto",
                    borderRadius: 4,
                    display: "flex",
                  }}
                >
                  Save
                </Button>
              </Grid>
            </Paper>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PostjobComponent;
