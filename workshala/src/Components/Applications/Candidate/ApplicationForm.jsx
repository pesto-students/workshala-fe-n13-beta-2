import React from "react";
import companyLogo from "../../../Assets/Images/companyLogo.jpg";
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
  Box,
  CardContent,
  Card,
} from "@mui/material";
import { isEmpty } from "../../../Services/Utils/Generic";
import { useSelector} from "react-redux";
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
import {postApplication} from '../../../redux/actions/applications'

const JobData = [
  { icon: <School />, title: "Work Level", value: "Senior" },
  { icon: <Work />, title: "Min Experience", value: "3 years" },
  { icon: <Group />, title: "Employee Type", value: "Part-Time" },
  { icon: <Paid />, title: "Salary", value: "$300/Month" },
];

var JobApplnData = {};
  
var JobDetailsData = [];

export const UpdateApplyjobData = (data) => {
  var tempData = ['workLevel', 'experience', 'empType', 'maxSalary'];

  tempData.forEach(function (k, i) {
    JobDetailsData[i] = {icon: JobData[i].icon, title: JobData[i].title, value: data[tempData[i]]};
  });

  JobApplnData = {companyLogo: companyLogo, name: data.companyRef.name, title: data.title,
                  desc: data.desc, type: data.empType,
                  jobRef: data.objectId}
}


const CompanyInfo = () => {
  return (
    <Box
      sx={{
        width: 1,
        bgcolor: "white",
        borderRadius: 8,
        p:1
      }}
    >
      <Paper elevation={0} >
        <Grid container>
          <Grid item md={12} align="center" sx={{ mt: 2, mb: 1 }}>
            <Avatar src={JobApplnData.companyLogo} />
          </Grid>
          <Grid item md={12} align="center" sx={{ mt: 1, align: "center" }}>
            <Typography style={{ fontSize: 13 }}>
              {JobApplnData.name} <br />
              {JobApplnData.title}
            </Typography>
          </Grid>
          <Grid item container spacing={4}>
            <Grid item md={4.5} sx={{m:1}}>
              <Button variant="outlined" sx={{ borderRadius: 4 }}>
                Following
              </Button>
            </Grid>
            <Grid item md={6} sx={{m:1}}>
              <Button variant="outlined" sx={{ borderRadius: 4 }}>
                Send Mail
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

const JobInfo = () => {
  return (
    <Box
      sx={{
        width: 1,
        bgcolor: "white",
        borderRadius: 8,
        p:1
      }}
    >
      <Paper elevation={0} >
        <Grid item>
          <Typography style={{ fontWeight: 550 }} sx={{ mt: 1, p: 2, ml: -1 }}>
            {JobApplnData.title}
          </Typography>
        </Grid>
        <Grid item>
          <Divider />
        </Grid>

        {/* TODO: use array */}
        {/*{icon:{SchoolIcon}, title: "Work Level", value: "Senior"} */}
        {JobDetailsData.map((item, i) => (
          <Grid item container sx={{ mt: 1, ml: 0.2 }} spacing={1} key={i}>
            <Grid item md={1.5}>
              {item.icon}
            </Grid>
            <Grid item md={6}>
              <Typography>{item.title}</Typography>
            </Grid>
            <Grid item>
              <Typography>{item.value}</Typography>
            </Grid>
          </Grid>
        ))}
        <Grid item sx={{ mt: 2 }}>
          <Divider />
        </Grid>

        <Grid item>
          <Typography style={{ fontWeight: 550 }} sx={{ mt: 1, p: 2, ml: -1 }}>
            Job Overview
          </Typography>
        </Grid>

        <Grid item>
          <Typography sx={{ ml: 1, mr: 1 }} align="justify">
            {JobApplnData.desc}
          </Typography>
        </Grid>
      </Paper>
    </Box>
  );
};

const FormItems = [
  {
    first: "FirstName",
    second: "MiddleName",
    third: "LastName",
  },
  {
    first: "BirthDate",
    second: "Mobile",
    third: "Email",
  },
];

const FormInput = (props) => {
  const { register, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = data => {
    
    const payload = {
        type: JobApplnData.type,
        jobRef: JobApplnData.jobRef,
        aboutCandidate: props.data.aboutYou,
        position: JobApplnData.title,
        status: "In-Progress",
        candidateName: data.FirstName + " " + data.LastName,
        dob: data.BirthDate,
        mobile: data.Mobile,
        email: data.Email
    }
    const payloadWrapper = {
      payload: payload,
      navigation: navigate
    }

    console.log(payloadWrapper);

    dispatch(postApplication(payloadWrapper));
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <Grid container>
      <Grid item container md={12}>
        {FormItems.map((item, i) => (
          <Grid item container sx={{ m: 2 }} key={i}>
            <Grid item md={4}>
              <TextField
                required
                id={item.first}
                label={item.first}
                defaultValue={props.data[item.first]}
                {...register(item.first)}
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                id={item.second}
                label={item.second}
                defaultValue={props.data[item.second]}
                {...register(item.second)}
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                required
                id={item.third}
                label={item.third}
                defaultValue={props.data[item.third]}
                {...register(item.third)}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item md={12}>
        <Typography
          style={{ fontWeight: 650, fontSize: 18 }}
          sx={{ mt: 1, p: 3 }}
        >
          About You
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Typography sx={{ ml: 3, mr: 3 }} align="justify">
          {props.data.aboutYou}
        </Typography>
      </Grid>
      <Divider sx={{ m: 3 }} />

      <Grid item md={12}>
        <Typography
            style={{ fontWeight: 650, fontSize: 18 }}
              sx={{ ml: 3 }}
        >
                Attach Your Resume
        </Typography>
      </Grid>

      <Grid item container>
        <Grid item>
            <CardTemplate
                  logo={<Upload />}
                  title="Upload Resume"
                  content="(Format: .Pdf, .Doc)"
            />
        </Grid>
        <Grid item>
            <CardTemplate
                  logo={<Article />}
                  title="Resume.pdf"
                  content="871 KB"
            />
        </Grid>
      </Grid>

      <Grid item container sx={{ ml: 1, mt: 2 }} spacing={2}>
        <Grid item>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ borderRadius: 4, width: 150 }}>
                  Submit
                </Button>
        </Grid>

        <Grid item>
                <Button
                  variant="contained"
                  sx={{ borderRadius: 4, width: 150 }}
                  disabled
                >
                  Cancel
                </Button>
        </Grid>
      </Grid>
    </Grid>
    </form>
  );
};

const CardTemplate = (props) => {
  return (
    <Card
      style={{}}
      sx={{
        ml: 3,
        mt: 1,
        border: 1,
        borderStyle: "dashed",
        width: 200,
        height: 70,
        color: "brown",
        borderColor: "black",
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ p: 1 }}>
        <Grid container>
          <Grid item xs={10} sm={10} md={10} sx={{ mt: 1 }}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                <Typography
                  fontSize={15}
                  color={"black"}
                  sx={{ mx: 2.5 }}
                  align={"left"}
                >
                  {props.title}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "black",
                    mx: 2.5,
                  }}
                  align={"left"}
                >
                  {props.content}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} sm={2} md={2} sx={{ mt: 2 }}>
            {props.logo}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default function ApplicationForm() {

  const userInfo = useSelector(state => state.userInfo.userInfo);
  var userData = {};

  if(userInfo !== undefined && userInfo.status && userInfo.data !== undefined 
            && userInfo.data.result !== undefined) {
      const temp = userInfo.data.result[0];
      userData = {FirstName: temp.firstName, LastName: temp.lastName, Mobile: temp.mobile, BirthDate: temp.dob,
                  Email: temp.email, aboutYou: temp.bio};
  }
  console.log(userData);

  if(isEmpty(JobApplnData))
    return(<></>);
  else
  return (
    <Grid container spacing={1}>
      <Grid item container direction="column" md={3} spacing={1} sx={{p: 2}}>
        <Grid item>
          <CompanyInfo />
        </Grid>
        <Grid item>
          <JobInfo />
        </Grid>
      </Grid>
      <Grid item container md={9} sx={{p:2}}>
        <Box
          sx={{
            width: 1,
            bgcolor: "white",
            borderRadius: 8,
            p:1
          }}
        >
          <Paper elevation={0}>
            <Grid item>
              <Typography
                style={{ fontWeight: 650, fontSize: 22 }}
                sx={{ p: 3 }}
              >
                Fill the job applications
              </Typography>
            </Grid>
            <FormInput data={userData}/>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}