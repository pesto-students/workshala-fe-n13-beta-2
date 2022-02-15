import React from "react";
import companyLogo from "../../Assets/Images/companyLogo.jpg";
import {
  Paid,
  Group,
  Work,
  School,
  Upload,
  Article,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  Typography,
  TextField,
  Paper,
  Chip,
  Box,
  Stack,
  CardContent,
  Card,
} from "@mui/material";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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

const FormInput = () => {
  return (
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
              defaultValue={item.first}
              variant="standard"
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              sx={{ width: 240 }}
              required
              id={item.second}
              defaultValue={item.second}
              variant="standard"
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              sx={{ width: 240, marginLeft: -3 }}
              required
              id={item.third}
              defaultValue={item.third}
              variant="standard"
            />
          </Grid>
        </Grid>
      ))}{" "}
    </Grid>
  );
};

const FormInputTwo = () => {
  return (
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
              defaultValue={item.first}
              variant="standard"
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              sx={{ width: 350 }}
              required
              id={item.second}
              defaultValue={item.second}
              variant="standard"
            />
          </Grid>
        </Grid>
      ))}{" "}
    </Grid>
  );
};

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

const JobType = () => {
  return (
    <Grid item md={12} xs={12} sm={12} direction="column" sx={{ mt: 3, ml: 3 }}>
      {RadioItems.map((item, i) => (
        <Grid item container sx={{ mt: 2 }} md={12} direction="column">
          <Grid item md={4}>
            <FormControl>
              <FormLabel id={item.first}>{item.first}</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value={item.second}
                  control={<Radio />}
                  label={item.second}
                />
                <FormControlLabel
                  value={item.third}
                  control={<Radio />}
                  label={item.third}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      ))}{" "}
    </Grid>
  );
};

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

const LocationRadius = [
  {
    label: "Within 10km",
    color: "primary",
  },
  {
    label: "Within 25km",
    color: "success",
  },
  {
    label: "Entire City",
    color: "success",
  },
];
export default function PostjobComponent() {
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
          <Paper elevation={0}>
            <Grid item>
              <Typography
                style={{ fontWeight: 650, fontSize: 22 }}
                sx={{ mt: 1, p: 3 }}
              >
                Basic Details
              </Typography>
            </Grid>
            <FormInput />

            <JobType />

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
            <FormInputTwo />
            <Typography sx={{ mt: 4, ml: 3 }}>
              Receive Application From
            </Typography>
            <Grid item container md={12} direction="row" spacing={1}>
              <Grid item sx={{ mt: 2, ml: 4 }} xs={5} sm={5} md={5}>
                <Stack direction="colunm">
                  {LocationRadius.map((item, i) => (
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
        </Box>
      </Grid>
    </Grid>
  );
}
