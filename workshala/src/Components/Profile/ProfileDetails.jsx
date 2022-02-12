import * as React from "react";
import {makeStyles} from '@mui/styles';

import {
  Grid,
  Typography,
  CardContent,
  Card,
  Paper,
  TextField
} from "@mui/material";
import {
  Upload,
  Article,
  
} from "@mui/icons-material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SkillItems = [
  {
    skill: "Cooking",
    experience: "3 years",
  },
  {
    skill: "Cooking",
    experience: "3 years",
  },
];

const ExperienceData = [
  {
    lastCompany: "Last Company",
    startDate: "10/01/2019",
    endDate: "10/1/2019",
  },
  {
    lastCompany: "Company",
    startDate: "10/01/2019",
    endDate: "10/1/2019",
  },
];

const CardTemplate = (props) => {
  return (
    <Card
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

/* 
 * Data used in Body
 */
const AboutMeData = {user: 'John Doe', AboutMeText: 'The lines are random and randomly typed the lines are random and randomly typed the lines are random and randomly typed randomly typed the lines are random and randomly typed the lines are random and randomly typed randomly typed the lines are random and randomly typed the lines are random and randomly typed randomly typed the lines are random and randomly typed the lines are random.'}
const BasicData = [
                    {title: 'Age', val: '18'}, 
                    {title: 'From', val: 'Hyderabad'}, 
                    {title: 'Date of Birth', val: '20/12/2003'},
                    {title: 'Gender', val: 'Male'},
                    {title: 'Password', val: '*****'},
                    {title: 'Password', val: '*****'}
                  ]

const ContactData= [
                    {title: 'Mobile', val: '+1-398-976-876'}, 
                    {title: 'Email', val: 'Doe@gmail.com'}, 
                    {title: 'Address', val: 'ABC Street'},
                    {title: 'City', val: 'NYC'},
                    {title: 'Country', val: 'United States'},
                    {title: 'PinCode', val: '110 011'}
                  ]

const TileHeading = (props) => {
  return (
    <Grid container sx={{p:2}}>
      <Grid item md={11.5}>
        <Typography variant="h6"  fontSize={props.size} style={{ fontWeight: 600 }} align="start">
          {props.heading}
        </Typography>
      </Grid>
      <Grid item md={0.5} justifyContent={"flex-end"}>
        <MoreVertIcon  />
      </Grid>
    </Grid>
  );
}
const AboutMeTile = () => {
  return (
    <Paper sx={{borderRadius: 4}}>
        <Grid container>
            <TileHeading heading={AboutMeData.user} size={30}/>
          <Grid item container sx={{ p:3 }}>
            <Typography
              variant="h6"
              fontSize={16}
              style={{ fontWeight: 600, fontFamily: "Fira Sans" }}
              align="start"
              
            >
              About Me
            </Typography>

            <Typography
              variant="h6"
              fontSize={15}
              align="justify"
              
            >
              {AboutMeData.AboutMeText}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
  );
}

const TileRow = (props) => {
    return (
      <Grid item container spacing={4} sx={{p:1}}>
        <Grid item md={6}>
          <Typography
            variant="h6"
            fontSize={18}
            textAlign={"end"}
            style={{ fontFamily: "Fira Sans", fontWeight: 550}}
          >
            {props.left}
          </Typography>
        </Grid>
        <Grid item md={6} >
          <Typography
            variant="h6"
            fontSize={18}
            textAlign={"start"}
            style={{ fontFamily: "Fira Sans"}}
          >
            {props.right}
          </Typography>
        </Grid>
     {/*   <Grid item md={6}>
          <TextField
            margin="normal"
            required
            disabled
            style = {{width: 100}}
            id={props.right}
            label={props.right}
            name={props.right}
            autoComplete={props.right}
            variant="standard"
          />
    </Grid>*/}
    </Grid>
    );
}

const TileRowType_2 = (props) => {
    return (
      <Grid container sx={{ml:3, mr:3}} spacing={2}>
        <Grid item md={5}>
          <TextField
            margin="normal"
            required
            fullWidth
            disabled
            id={props.skill}
            label={props.skill}
            name={props.skill}
            autoComplete={props.skill}
            variant="standard"
          />
        </Grid>
      
        <Grid item md={5} sx={{mb:3}}>
          <TextField
            margin="normal"
            required
            fullWidth
            disabled
            id={props.experience}
            label={props.experience}
            name={props.experience}
            autoComplete={props.experience}
            variant="standard"
          />
        </Grid>
      
        <Grid item xs={0.5} sm={0.5} md={0.5} sx={{mt:5}}>
          <ModeEditOutlineOutlinedIcon />
        </Grid>
        <Grid item xs={0.5} sm={0.5} md={0.5} sx={{mt:5}}>
          <DeleteForeverOutlinedIcon />
        </Grid>
      
    </Grid>
    );
}

const TileRowType_3 = (props) => {
  return (
    <Grid container sx={{ml:3, mr:3}} spacing={2}>
      <Grid item md={3.5}>
        <TextField
          margin="normal"
          required
          fullWidth
          disabled
          id={props.lastCompany}
          label={props.lastCompany}
          name={props.lastCompany}
          autoComplete={props.lastCompany}
          variant="standard"
        />
      </Grid>
    
      <Grid item md={3.5} sx={{mb:3}}>
        <TextField
          margin="normal"
          required
          fullWidth
          disabled
          id={props.startDate}
          label={props.startDate}
          name={props.startDate}
          autoComplete={props.startDate}
          variant="standard"
        />
      </Grid>

      <Grid item md={3.5} sx={{mb:3}}>
        <TextField
          margin="normal"
          required
          fullWidth
          disabled
          id={props.endDate}
          label={props.endDate}
          name={props.endDate}
          autoComplete={props.endDate}
          variant="standard"
        />
      </Grid>
    
      <Grid item xs={0.5} sm={0.5} md={0.5} sx={{mt:5}}>
        <ModeEditOutlineOutlinedIcon />
      </Grid>
      <Grid item xs={0.5} sm={0.5} md={0.5} sx={{mt:5}}>
        <DeleteForeverOutlinedIcon />
      </Grid>
    
  </Grid>
  );
}

const TileTemplate = (props) => {
  return (
    <Paper sx={{borderRadius: 4}}>
      <TileHeading heading={props.heading} size={20}/>

      <Grid item container md={12}>
        {props.data.map((item, i) => (
          <TileRow left={item.title} right={item.val} key={i}/>
        ))}
      </Grid>
    </Paper>
  );
}

const SkillsForm = () => {
  return (
    <Paper sx={{borderRadius: 4}}>
      <TileHeading heading="Skills" size={18}/>
      
      <Grid item container>
        {SkillItems.map((item, i) => (
          <TileRowType_2 key={i} skill={item.skill} experience={item.experience}/>
        ))}
      </Grid>
    </Paper>
  );
};


const ExperienceTile = () => {
  return (
    <Paper sx={{borderRadius: 4}}>
      <TileHeading heading="Experience" size={18}/>
      
      <Grid item container>
        {ExperienceData.map((item, i) => (
          <TileRowType_3 key={i} lastCompany={item.lastCompany} 
                                 startDate={item.startDate}
                                 endDate={item.endDate}/>
        ))}
      </Grid>
    </Paper>
  );
};

const ResumeTile = () => {
  return (
    <Paper sx={{borderRadius: 4}} >
      <TileHeading heading="Resume" size={18}/>

      <Grid item container sx={{p:2}}>
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
  </Paper>
  );
}

export default function ProfileDetails(props) {
  return (
    <Grid container spacing={1}>
      <Grid item md={12}>
        <AboutMeTile/>
      </Grid>

      <Grid item container spacing={1}>
        <Grid item container md={6}>
          <TileTemplate data={BasicData} heading="Basic"/>
        </Grid>
        <Grid item container md={6}>
          <TileTemplate data={ContactData} heading="Contact"/>
        </Grid>
      </Grid>
      
      <Grid item md={12}>
          <SkillsForm />
      </Grid>

      <Grid item md={12}>
          <ExperienceTile />
      </Grid>

      <Grid item md={12}>
          <ResumeTile/>
      </Grid>

      
    </Grid>
  );
}
