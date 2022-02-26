import React from "react";
import companyLogo from "../../../Assets/Images/companyLogo.jpg";
import Loader from '../../../Services/Utils/Loader'
import * as moment from "moment";
import DoneIcon from '@mui/icons-material/Done';
import {
  Download
} from "@mui/icons-material";
import {
  Paid,
  Group,
  Work,
  School,
  Upload,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  Typography,
  TextField,
  Paper,
  Box
} from "@mui/material";
import { useState } from "react";
import { isEmpty } from "../../../Services/Utils/Generic";
import { useSelector} from "react-redux";
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {useNavigate, Navigate} from "react-router-dom";
import {postApplication} from '../../../redux/actions/applications'

const JobData = [
  { icon: <School />, title: "Work Level", value: "Senior" },
  { icon: <Work />, title: "Min Experience", value: "3 years" },
  { icon: <Group />, title: "Employee Type", value: "Part-Time" },
  { icon: <Paid />, title: "Salary", value: "$300/Month" },
];

var JobApplnData = {};
let resumeData = [];
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
  const [resData, setResData] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onSubmit = data => {
    
    const payload = {
        type: JobApplnData.type,
        aboutCandidate: props.data.aboutYou,
        position: JobApplnData.title,
        status: "Pending",
        candidateName: data.FirstName + " " + data.LastName,
        dob: data.BirthDate,
        mobile: data.Mobile,
        email: data.Email
    }
    const payloadWrapper = {
      payload: payload,
      resume: resumeData,
      jobRef: JobApplnData.jobRef,
      navigation: navigate
    }

    dispatch(postApplication(payloadWrapper));
  }

  
  const handleResumeUpload = (event) => {
    
    if (event.target.files[0]) {
      const selectedFile = event.target.files[0];
      
      var reader = new FileReader();
      reader.onloadend = async function () {
      const base64Response = await fetch(reader.result);
      const blob = await base64Response.blob();
      
      resumeData = {
        file: blob,
        name: selectedFile.name,
        dataType: 'application/pdf'
        }
      };
      reader.readAsDataURL(selectedFile);
      setResData(selectedFile);
    }
  }

  const showpdf = (directory) => {
    window.open(directory.url);
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
        <Grid item sx={{ml:3, mt:2}}>
            <Button 
                variant="outlined" style={{borderRadius: 8, border:'dashed'}}
                component="label" endIcon={<Upload style={{ color: 'brown'}}/>}
>
                Upload Resume <br/> (Format: .pdf, .doc) 
                <input
                      accept="application/pdf,application/msword"
                      type="file" id="profilePhotoFileUpload"
                      hidden                       
                       {...register("resume")}
                       {...register('resume', {
                        onChange: (e) => {handleResumeUpload(e)}
                      })}
                />
            </Button>
        </Grid>
        {isEmpty(resData) ? 
        <Grid item sx={{ml:3, mt:2}}>
            <Button
                variant="outlined" style={{borderRadius: 8, border:'dashed', width: '200px', height: '60px'}}
                onClick={() => {
                  showpdf(props.data.resume)
                }}
                endIcon={<Download style={{ color: 'brown'}}/>}>
                    <Grid>
                      <Grid item md={12}>
                        Resume 
                      </Grid>
                      <Typography style={{fontSize:10}}>
                        uploaded on {moment(props.data.updatedAt).format("YYYY-MM-DD")}
                      </Typography>
                  </Grid>
                
            </Button>
        </Grid> : <Grid item sx={{ml:3, mt:3}}>
            <DoneIcon style={{fontSize:50, verticalAlign:"middle"}}/>
        </Grid>}
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

export default function ApplicationForm() {

  const userInfo = useSelector(state => state.userInfo.userInfo);
  var userData = {};

  if(userInfo !== undefined && userInfo.status && userInfo.data !== undefined 
            && userInfo.data.result !== undefined) {
      const temp = userInfo.data.result[0];
      userData = {FirstName: temp.firstName, LastName: temp.lastName, Mobile: temp.mobile, BirthDate: temp.dob,
                  Email: temp.email, aboutYou: temp.bio, resume: temp.resume, updatedAt: temp.updatedAt};
  } else {
    //Move to Jobs page
    <Navigate to="/jobs" replace={true} /> 
  }

  if(isEmpty(JobApplnData))
    return(<Loader/>);
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
