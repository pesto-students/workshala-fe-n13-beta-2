import * as React from "react";
import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {useForm, FormProvider, useFormContext} from 'react-hook-form';
import dev from '../../../Assets/Images/dev.png';
import deleteIcon from '../../../Assets/Images/delete.jpeg'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import {updateUserInfo} from '../../../redux/actions/user'
import {useNavigate} from "react-router-dom";
import Loader from '../../../Services/Utils/Loader'
import {fetchProfile} from '../../../redux/actions/user'

import {
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import {
  Upload,
} from "@mui/icons-material";
import {TextHeading2} from '../../Common/Common'
import { useState } from "react";

var SkillItems = []

var ExperienceData = [];

const TileHeading = (props) => {
  return (
    
      <Grid item md={11.5} sx={{ml:2, mt:2}}>
        <Typography variant="h6"  fontSize={props.size} style={{ fontWeight: 600 }}>
          {props.heading}
        </Typography>
      </Grid>
  );
}
let imgData = [];
const handleImgUpload = (event) => {
    
  if (event.target.files[0]) {
    const selectedFile = event.target.files[0];
    
    var reader = new FileReader();
    reader.onloadend = async function () {
    const base64Response = await fetch(reader.result);
    const blob = await base64Response.blob();
    // setFile({
    // file: blob,
    // name: selectedFile.name,
    // });
    imgData = {
      file: blob,
      name: selectedFile.name,
      dataType: 'image/jpeg'
      }
    };
    reader.readAsDataURL(selectedFile);
  }
}

const AboutMeTile = () => {
  const { register } = useFormContext();
  const Labels = [
    {title: 'About Yourself', value: 'bio', width: '100%'},
    {title: 'Email', value: 'email' , width: '50%'},
    {title: 'Contact', value: 'mobile'},
    {title: 'Address', value: 'address', width: '100%'}
  ]
  
  
  return (
    <Paper sx={{borderRadius: 4, p:2}}>
        <Grid container spacing={1}>
          <Grid item md={12}>
          <Typography variant="h6" style={{fontWeight:800}} sx={{p:2}}>Edit Profile</Typography>
          </Grid>

          <Grid item container>
            <Grid item container sm={6} md={6} spacing={1}>
              <Grid item container md={12} spacing={1}>
                <Grid item md={6} alignSelf={"center"} textAlign={"right"} >
                  <TextHeading2 text="First Name"/>
                </Grid>
                <Grid item md={6}>
                  <TextField id="firstName" {...register("firstName")}></TextField>
                </Grid>
              </Grid>
              <Grid item container md={12} spacing={1}>
                <Grid item md={6} alignSelf={"center"} textAlign={"right"} >
                  <TextHeading2 text="Last Name"/>
                </Grid>
                <Grid item md={6}>
                  <TextField id="lastName" fullWidth {...register("lastName")}></TextField>
                </Grid>
              </Grid>
            </Grid>

            <Grid item container md={6} justifyContent={"center"}>
                <Grid item >
                <Avatar src={dev} sx={{width: 120, height: 120}}/>
                </Grid>
                <Grid item>
                      <IconButton color="primary" component="label">
                      <input type="file" id="profileImgUpload"  hidden                       
                                  {...register('profileImg', {
                                    onChange: (e) => {handleImgUpload(e)}
                                  })}
                            />
                        <ModeEditOutlineIcon/>
                      </IconButton>
                </Grid>
            </Grid>
          </Grid>

          {Labels.map((item, i) => (
            <Grid item container key={i} md={12} spacing={1}>
              <Grid item md={3} alignSelf={"center"} textAlign={"right"}>
                <TextHeading2 text={item.title}/>
              </Grid>
              <Grid item md={9}>
                <TextField id={item.value} style ={{width: item.width}} {...register(item.value)} ></TextField>
              </Grid>  
            </Grid>
          ))}
          
          <Grid item md={3} alignSelf={"center"} textAlign={"right"}>
            <TextHeading2 text="City"/>
          </Grid>
          <Grid item md={3}>
            <TextField id="City" {...register("city")}></TextField>
          </Grid>

          <Grid item md={3} alignSelf={"center"} textAlign={"right"}>
            <TextHeading2 text="State"/>
          </Grid>
          <Grid item md={3}>
            <TextField id="State" {...register("state")}></TextField>
          </Grid>

          <Grid item md={3} alignSelf={"center"} textAlign={"right"}>
            <TextHeading2 text="ZipCode"/>
          </Grid>
          <Grid item md={3}>
            <TextField id="zipCode" {...register("pin")}></TextField>
          </Grid>

          <Grid item md={3} alignSelf={"center"} textAlign={"right"}>
            <TextHeading2 text="Country"/>
          </Grid>
          <Grid item md={3}>
            <TextField id="country" {...register("country")}></TextField>
          </Grid>

          <Grid item md={3} alignSelf={"center"} textAlign={"right"}>
            <TextHeading2 text="Password"/>
          </Grid>
          <Grid item md={3}>
            <TextField disabled id="Password" label="**********"></TextField>
          </Grid>
          <Grid item md={6} textAlign={"left"} alignSelf={"center"} >
            <Button variant="outlined">Reset Password</Button>
          </Grid>
        </Grid>
      </Paper>
  );
}

var skillsFlag = 0;
const SkillsTileRow = (props) => {

    const handleSkillsDelete = (e) => {
      const index = e.currentTarget.id
      console.log(index)
      SkillItems.splice(index, 1);
      skillsFlag = !skillsFlag;                     // TODO- workaround
      props.hook(skillsFlag);
    }


    return (
      <Grid container sx={{ml:3, mr:3}} spacing={2}>
        <Grid item md={5}>
          <TextField
            margin="normal"
            // required
            fullWidth
            id={props.id}
            label={props.skill}
            name={props.skill}
            variant="standard"
             //{...register(props.id)}
          />
        </Grid>
      
        <Grid item md={5} sx={{mb:3}}>
          <TextField
            margin="normal"
           // required
            fullWidth
            id={props.id}
            label={props.experience}
            name={props.experience}
            variant="standard"
           //  {...register(props.id)}
          />
        </Grid>
        <Grid item xs={0.5} sm={0.5} md={1.5} sx={{mt:2}}>
            <IconButton onClick={handleSkillsDelete} id={props.id}>
                <Avatar src= {deleteIcon }/>
            </IconButton>
        </Grid>
    </Grid>
    );
}

var expFlag = 0;
const ExpTileRow = (props) => {
  
  const handleExpDelete = (e) => {
    const index = e.currentTarget.id
    console.log(index)
    ExperienceData.splice(index, 1);
    expFlag = !expFlag;                     // TODO- workaround
    props.hook(expFlag);
  }
  return (
    <Grid container sx={{ml:3, mr:3}} spacing={2}>
      <Grid item md={3.5}>
        <TextField
          margin="normal"
         // required
          fullWidth
          id={props.lastCompany}
          label={props.lastCompany}
          name={props.lastCompany}
          variant="standard"
         // {...register("lastCompany-"+props.id)}
        />
      </Grid>
    
      <Grid item md={3.5} sx={{mb:3}}>
        <TextField
          margin="normal"
          //required
          fullWidth
          id={props.startDate}
          label={props.startDate}
          name={props.startDate}
          variant="standard"
        //  {...register("startDate"+props.id)}
        />
      </Grid>

      <Grid item md={3.5} sx={{mb:3}}>
        <TextField
          margin="normal"
         // required
          fullWidth
          id={props.endDate}
          label={props.endDate}
          name={props.endDate}
          variant="standard"
         // {...register("endDate-"+props.id)}
        />
      </Grid>
      <Grid item xs={0.5} sm={0.5} md={0.5} sx={{mt:2}}>
        <IconButton onClick={handleExpDelete} id={props.id}>
                <Avatar src= {deleteIcon }/> 
          </IconButton>
      </Grid>
  </Grid>
  );
}

const SkillsForm = () => {
  const [skillValue, setSkillValue] = useState(false);
  
  const handleAddSkills = () => {

      SkillItems = [
        ...SkillItems,
        {
          skill: "",
          experience: ""
        }
      ]
      setSkillValue(SkillItems);
  }

    React.useEffect(() => {
      return (
        <Paper sx={{borderRadius: 4, p:2}}>
          <TileHeading heading="Skills" size={18}/>
          
          <Grid item container>
            {SkillItems.map((item, i) => (
              <SkillsTileRow key={i} skill={item.skill} experience={item.experience} id={"skill-"+i} hook={setSkillValue}/>
            ))}
          </Grid>
          <Grid item xs={0.5} md={12} textAlign="right" sx={{m:1}}>
              <Button variant="outlined" onClick={handleAddSkills}>Add more</Button>
          </Grid>
        </Paper>
        );
    }, [skillValue]);

    return (<Paper sx={{borderRadius: 4, p:2}}>
      <TileHeading heading="Skills" size={18}/>
      
      <Grid item container>
        {SkillItems.map((item, i) => (
          <SkillsTileRow key={i} skill={item.skill} experience={item.experience} id={"exp-"+i} hook={setSkillValue}/>
        ))}
      </Grid>
      <Grid item xs={0.5} md={12} textAlign="right" sx={{m:1}}>
          <Button variant="outlined" onClick={handleAddSkills}>Add more</Button>
      </Grid>
    </Paper>);
  
};

const ExperienceTile = () => {
  const [expValue, setExpValue] = useState(false);

  const handleAddExp = () => {

    const lastIndex = ExperienceData.length - 1;

    if(lastIndex > 0 && 
      (ExperienceData[lastIndex].lastCompany === '' || ExperienceData[lastIndex].startDate === '' || ExperienceData[lastIndex].endDate === ''))
      alert('Please add the data in earlier created row');
    else {
      ExperienceData = [
        ...ExperienceData,
        {
          lastCompany: "",
          startDate: "",
          endDate: ""
        }
      ]
      setExpValue(!expValue);
    }
  }

  React.useEffect(() => {
  return (
    <Paper sx={{borderRadius: 4, p:2}}>
      <TileHeading heading="Experience" size={18}/>
      
      <Grid item container>
        {ExperienceData.map((item, i) => (
          <ExpTileRow key={i} lastCompany={item.lastCompany} 
                                 startDate={item.startDate}
                                 endDate={item.endDate}
                                 id={i}
                                 hook={setExpValue}/>
        ))}
      </Grid>
      <Grid item xs={0.5} sm={0.5} md={12} textAlign="right" sx={{m:1}}>
          <Button variant="outlined" onClick={handleAddExp}>Add more</Button>
      </Grid>
    </Paper>
  );});

  return (
    <Paper sx={{borderRadius: 4, p:2}}>
      <TileHeading heading="Experience" size={18}/>
      
      <Grid item container>
        {ExperienceData.map((item, i) => (
          <ExpTileRow key={i} lastCompany={item.lastCompany} 
                                 startDate={item.startDate}
                                 endDate={item.endDate}
                                 id={i}
                                 hook={setExpValue}/>
        ))}
      </Grid>
      <Grid item xs={0.5} sm={0.5} md={12} textAlign="right" sx={{m:1}}>
          <Button variant="outlined" onClick={handleAddExp}>Add more</Button>
      </Grid>
    </Paper>
  );
};

// function handleResumeUpload () {
//   const fileUploadControl = $("#profilePhotoFileUpload")[0];
//   if (fileUploadControl.files.length > 0) {
//     const file = fileUploadControl.files[0];
//     const name = "photo.jpg";

//     const parseFile = new Parse.File(name, file);
//   }
// }


const ResumeTile = () => {
  const { register } = useFormContext();
  return (
    <Paper sx={{borderRadius: 4, p:2}} >
      <TileHeading heading="Resume" size={18}/>

      <Grid item container sx={{p:2}}>
        <Grid item>
            <Button
                variant="outlined" style={{borderRadius: 8, border:'dashed'}}
                component="label" endIcon={<Upload style={{ color: 'brown'}}/>}
>
                Upload Resume <br/> (Format: .pdf, .doc) 
                <input
                      type="file" id="profilePhotoFileUpload"
                      hidden                       
                       {...register("resume")}
                       {...register('resume', {
                        onChange: (e) => {handleResumeUpload(e)}
                      })}
                />
            </Button>
        </Grid>
    </Grid>
  </Paper>
  );
}

let resumeData = [];
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
  }
}

export default function ProfileDetails(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const userInfo = useSelector(state => state.userInfo);
  
  const methods = useForm();
  
  const { reset} = methods;

    const onSubmit = data => {
      console.log(data);

      // var reader = new FileReader();
      // reader.onloadend = async function () {
      // const base64Response = await fetch(reader.result);
      // const blob = await base64Response.blob();

      //const temp = handleImageUpload(data['profileImg']);

      const payl = {
        data: data,
        imgData: imgData,
        resumeData: resumeData
      }
      //handleResumeUpload();

      // remove old skills
      delete data['skills']
      // create new skills json
      // let libraries = data.filter(l => {
      //   return l.name.toLowerCase().match( "skill-" );
      // });
      //console.log(skills);


      const payload = {
        payload: payl,
        navigation: navigate
      }

      dispatch(updateUserInfo(payload));
    }

    React.useEffect(() => {  
      if(userInfo !== undefined && userInfo.userInfo !== undefined && userInfo.userInfo.status && userInfo.userInfo.data !== undefined 
        && userInfo.userInfo.data.result !== undefined) {
        const defaultData = userInfo.userInfo.data.result[0];

        //remove the unwanted columns from retrreived data
        ['createdAt', 'updatedAt', 'className', '__type', 'objectId'].forEach(item => {
            delete defaultData[item];
        })

        reset(defaultData);    // reset reports infinite render if used outside useEffect
      }
      //setValue({firstName: "first"})
    }, [userInfo]);

    React.useEffect(() => {                             
     // if(isEmpty(userInfo)) {
          dispatch(fetchProfile());                //TODO: Don't call if there's no change in state
          
       //   this will populate data only if userInfo is there, on refresh the userinfo need to be fetched again
          if(userInfo !== undefined && userInfo.userInfo !== undefined && userInfo.userInfo.status && userInfo.userInfo.data !== undefined 
            && userInfo.userInfo.data.result !== undefined) {
            reset(userInfo.userInfo.data.result[0]);    // reset reports infinite render if used outside useEffect
          }
      //}
    }, [])

    let userData = [];
  if(userInfo.loading) {
      return (
              <Loader/>
          );
  } else {
    
    if(userInfo !== undefined && userInfo.userInfo !== undefined && userInfo.userInfo.status && userInfo.userInfo.data !== undefined 
      && userInfo.userInfo.data.result !== undefined) {
      userData = userInfo.userInfo.data.result[0];
    }
  return (
    <FormProvider {...methods} >
    <form onSubmit={methods.handleSubmit(onSubmit)}>
    <Grid container spacing={1}>
      <Grid item md={12}>
        <AboutMeTile/>
      </Grid>
      
      <Grid item md={12}>
          <SkillsForm />
      </Grid>

      <Grid item md={12}>
          <ExperienceTile />
      </Grid>

      <Grid item md={12}>
          <ResumeTile/> 
          {/* <input type="file" name="pic" {...register("image")}/> */}
      </Grid>
      <Grid item md={6} textAlign={"end"}>
        <Button variant="contained" type="submit">
          Save Changes
        </Button>
      </Grid>
      <Grid item md={6}>
        <Button variant="contained" component={Link}
                                  to="/candidate/profile">
          Cancel
        </Button>
      </Grid>
        

    </Grid>
    </form>
    </FormProvider>
  );
  }
}
