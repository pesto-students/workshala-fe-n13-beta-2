import * as React from "react";
import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {useForm, FormProvider, useFormContext} from 'react-hook-form';
import {searchJobs} from '../../../redux/actions/jobs'
import {useNavigate} from "react-router-dom";
import {postJob} from "../../../redux/actions/jobs";

import {
  Grid,
  Typography,
  Paper,
  TextField,
  Button
} from "@mui/material";
import {TextHeading2} from '../../Common/Common'
import { GetRole, isEmpty } from "../../../Services/Utils/Generic";

const PostJobTile = () => {
  const { register } = useFormContext();
  const Labels = [
    {title: 'Employement Type', value: 'empType' , width: '33%'},
    {title: 'Required Experience', value: 'experience', width: '33%'}
  ]

  return (
    <Paper sx={{borderRadius: 4, p:2}}>
        <Grid container spacing={1}>
          <Grid item md={12}>
          <Typography variant="h6" style={{fontWeight:800}} sx={{p:2}}>Post New Job</Typography>
          </Grid>

            <Grid item container>
                <Grid item container sm={6} md={12} spacing={5}>
                    <Grid item container md={6} spacing={3.5}>
                        <Grid item md={6} alignSelf={"center"} textAlign={"right"} >
                            <TextHeading2 text={"Job Title"}/>
                        </Grid>
                        <Grid item md={6}>
                            <TextField id={"title"} fullWidth {...register("title", { required: true, maxLength: 30 })}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container md={6} spacing={5}>
                        <Grid item md={3} alignSelf={"center"} textAlign={"right"} >
                            <TextHeading2 text={"Position"}/>
                        </Grid>
                        <Grid item md={6} textAlign={"left"}>
                            <TextField id={"Position"} fullWidth {...register("position", { required: true, maxLength: 30 })}></TextField>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container>
                <Grid item container sm={6} md={12} spacing={5}>
                    <Grid item container md={6} spacing={3.5}>
                        <Grid item md={6} alignSelf={"center"} textAlign={"right"} >
                            <TextHeading2 text={"Work Level"}/>
                        </Grid>
                        <Grid item md={6}>
                            <TextField id={"workLevel"} fullWidth {...register("workLevel", { required: true, maxLength: 30 })}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container md={6} spacing={5}>
                        <Grid item md={3} alignSelf={"center"} textAlign={"right"} >
                            <TextHeading2 text={"Job Type"}/>
                        </Grid>
                        <Grid item md={6} textAlign={"left"}>
                            <TextField id={"type"} fullWidth {...register("type", { required: true, maxLength: 30 })}></TextField>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container md={12} spacing={2}>
                <Grid item md={3} alignSelf={"center"} textAlign={"right"} >
                    <TextHeading2 text="Job Description"/>
                </Grid>
                <Grid item md={7.5} textAlign={"left"}>
                    <TextField id="desc" fullWidth {...register("desc", { required: true, maxLength: 100 })}
                        multiline
                        rows={4}>
                    </TextField>
                </Grid>
            </Grid>
          {Labels.map((item, i) => (
            <Grid item container key={i} md={12} spacing={2}>
              <Grid item md={3} alignSelf={"center"} textAlign={"right"}>
                <TextHeading2 text={item.title}/>
              </Grid>
              <Grid item md={9}>
                <TextField id={item.value} style ={{width: item.width}} {...register(item.value, { required: true, maxLength: 30 })} ></TextField>
              </Grid>  
            </Grid>
          ))}

            <Grid item container>
                <Grid item container sm={6} md={12} spacing={5}>
                    <Grid item container md={6} spacing={3.5}>
                        <Grid item md={6} alignSelf={"center"} textAlign={"right"} >
                            <TextHeading2 text={"Max Salary"}/>
                        </Grid>
                        <Grid item md={6}>
                            <TextField id={"maxSalary"} fullWidth {...register("maxSalary", { required: true, maxLength: 30 })}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container md={6} spacing={5}>
                        <Grid item md={3} alignSelf={"center"} textAlign={"right"} >
                            <TextHeading2 text={"Min Salary"}/>
                        </Grid>
                        <Grid item md={6} textAlign={"left"}>
                            <TextField id={"minSalary"} fullWidth {...register("minSalary", { required: true, maxLength: 30 })}></TextField>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container sm={6} md={12} spacing={5}>
                <Grid item container md={6} spacing={3.5}>
                  <Grid item md={6} alignSelf={"center"} textAlign={"right"} >
                    <TextHeading2 text={"Number of Vacancies"}/>
                  </Grid>
                <Grid item md={6}>
                    <TextField id={"vacancies"} fullWidth {...register("workLevel", { required: true, maxLength: 30 })}></TextField>
                </Grid>
                </Grid>
                    <Grid item container md={6} spacing={5}>
                        <Grid item md={3} alignSelf={"center"} textAlign={"right"} >
                            <TextHeading2 text={"Location"}/>
                        </Grid>
                        <Grid item md={6} textAlign={"left"}>
                            <TextField id={"location"} fullWidth {...register("location", { required: true, maxLength: 30 })}></TextField>
                        </Grid>
                    </Grid>
            </Grid>

            <Grid item container md={12} spacing={2}>
                <Grid item md={3} alignSelf={"center"} textAlign={"right"} >
                    <TextHeading2 text="Qualifications"/>
                </Grid>
                <Grid item md={7.5} textAlign={"left"}>
                    <TextField id="qualification" fullWidth {...register("qualification", { required: true, maxLength: 30 })}
                        multiline
                        rows={4}>
                    </TextField>
                </Grid>
            </Grid>
        </Grid>
      </Paper>
  );
}
let prefillFlag = [];
export const PrefillPostJob = (props) => {
  prefillFlag = props;
}

export default function PostJob(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const methods = useForm();
  const { register, handleSubmit, reset} = methods;
  const role = GetRole();

  let data = (props !== undefined) ? props : [];

  const onSubmit = data => {
    data['status'] = 'Active';
    const payload = {
        data: data,
        role: role,
        navigation: navigate,
      };
  
      dispatch(postJob(payload));
    }
  
    const searchJob = useSelector(state => state.searchJobs);

    React.useEffect(() => {
        if(!isEmpty(prefillFlag)) {
          const filter = { 'objectId': prefillFlag}
          dispatch(searchJobs(filter));
        }
    }, [])

    React.useEffect(() => {
      if(!searchJob.loading && searchJob.searchJobs !== undefined
        && searchJob.searchJobs.data !== undefined) {
          reset(searchJob.searchJobs.data.results[0])
      }
    }, [searchJob])

    
    
  return (
    <FormProvider {...methods} >
    <form onSubmit={handleSubmit(onSubmit)}>
    <Grid container spacing={1}>
      <Grid item md={12}>
        <PostJobTile/>
      </Grid>
      
      <Grid item md={6} textAlign={"end"}>
        <Button variant="contained" type="submit">
          Save Changes
        </Button>
      </Grid>
      <Grid item md={6}>
        <Button variant="contained" component={Link}
                                  to="/recruiter/jobs">
          Cancel
        </Button>
      </Grid>
    </Grid>
    </form>
    </FormProvider>
  );
}
