import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { searchJobs } from "../../../redux/actions/jobs";
import searchCandidates from "../../../redux/actions/searchCandidates";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Typography,
  Box,
  Button,
  TextField,
  Tabs,
  Tab,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { isEmpty } from "../../../Services/Utils/Generic";

let RecruiterFilterData = {};
let flag = 0;                       //TODO - workaround for records not found scenario
const CustomTab = withStyles({
  selected: {
    backgroundColor: "white",
    borderRadius: 4
  },
})(Tab);

const FindJobs = (props) => {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState(0);
  const { register, handleSubmit, reset } = useForm();
  const searchJob = useSelector((state) => state.searchJobs);
  const searchCandidate = useSelector((state) => state.searchCandidates);

  function removeEmptyFields(data) {
    Object.keys(data).forEach((key) => {
      if (data[key] === "" || data[key] == null) {
        delete data[key];
      }
    });
  }

  function filterBySkillNExperience(data) {
    let res = [];
    data.forEach(function (k, i) {
      let temp = data[i].skills;
      if (
        temp !== undefined &&
        RecruiterFilterData !== undefined &&
        RecruiterFilterData.skills !== undefined &&
        RecruiterFilterData.min_experience !== undefined &&
        RecruiterFilterData.max_experience !== undefined
      ) {
        temp.forEach(function (l, m) {
          if (
            // Filter by skills
            temp[m].skill === RecruiterFilterData.skills &&
            // Filter by min and max Experience
            Number(RecruiterFilterData.min_experience) >= temp[m].experience &&
            Number(RecruiterFilterData.max_experience) >= temp[m].experience
          ) {
            res[i] = data[i];
          }
        });
      }
    });
    return res;
  }

  const onRecruiterSubmit = (data) => {
    var payload = "";
    flag = 1;
    RecruiterFilterData = data; // Saving it now to use it for filter later

    /* Fetch all the records on basis of location specified
     * and filter in front on basis of other specified fields
     */
    if (!(data["city"] === "" || data["city"] == null)) {
      payload = {
        city: data["city"],
      };
    }
    dispatch(searchCandidates(payload));
  };

  React.useEffect(() => {
    if (
      !searchCandidate.loading &&
      searchCandidate.searchCandidates !== undefined &&
      searchCandidate.searchCandidates.data !== undefined
    ) {
      const resp = searchCandidate.searchCandidates.data.results;
      if (isEmpty(resp) && flag) {
        alert("No Recors found, Please try again later!!");
      }
      // Filter By skills and experience
      const filteredData = filterBySkillNExperience(resp);

      props.click(filteredData);
    }
  }, [searchCandidate]);

  const onCandidateSubmit = (data) => {
    flag = 1;
    removeEmptyFields(data);
    dispatch(searchJobs(data));
  };

  React.useEffect(() => {
    if (
      !searchJob.loading &&
      searchJob.searchJobs !== undefined &&
      searchJob.searchJobs.data !== undefined
    ) {
      const resp = searchJob.searchJobs.data.results;
      if (isEmpty(resp) && flag) {
        alert("No Recors found, Please try again later!!");
      }
      props.click(resp);
    }
  }, [searchJob]);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    reset();
    props.click([]);
  };
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", color: "white" }}>
      <Tabs
        value={selectedTab}
        TabIndicatorProps={{ style: { background: "red" } }}
        onChange={handleChange}
      >
        <CustomTab label="Find a Job" />
        <CustomTab label="Find a Candidate" />
      </Tabs>
      {selectedTab === 0 ? (
        <form onSubmit={handleSubmit(onCandidateSubmit)}>
          <Grid
            container
            sx={{ backgroundColor: "white", borderRadius: 2, p: 1 }}
            spacing={1}
          >
            <Grid item xs={3} sm={3} md={3}>
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                {...register("title")}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <TextField
                id="category"
                label="Category"
                variant="outlined"
                {...register("type")}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <TextField
                id="location"
                label="Location"
                variant="outlined"
                {...register("location")}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ height: 50, width: 150 }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onRecruiterSubmit)}>
          <Grid
            container
            sx={{ backgroundColor: "white", borderRadius: 2, p: 1 }}
            spacing={1}
          >
            <Grid item xs={3} sm={3} md={2}>
              <TextField
                id="skills"
                label="Skill"
                variant="outlined"
                {...register("skills")}
                required
              />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <TextField
                id="min_experience"
                label="Min. Experience"
                variant="outlined"
                {...register("min_experience")}
                required
              />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <TextField
                id="max_experience"
                label="Max. Experience"
                variant="outlined"
                {...register("max_experience")}
                required
              />
            </Grid>
            <Grid item xs={3} sm={3} md={2}>
              <TextField
                id="location"
                label="Location"
                variant="outlined"
                {...register("city")}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={2}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ height: 50, width: 90 }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Box>
  );
};

export default function Body({ setSearchData }) {
  flag = 0;
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <Typography component="h1" fontSize={14} color="black">
          We have 900,000 great job offers you deserve
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Typography
          component="h1"
          fontSize={38}
          color="black"
          sx={{ width: 250 }}
        >
          Your Dream Job is Waiting
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <FindJobs click={setSearchData} />
      </Grid>
    </Grid>
  );
}
