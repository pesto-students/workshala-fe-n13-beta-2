import * as React from "react";
import { Grid, Typography, Button, Card, ImageList, ImageListItem } from "@mui/material";
import office1 from "../../Assets/Images/ofc1.png";
import office2 from "../../Assets/Images/ofc2.png";
import office3 from "../../Assets/Images/ofc3.png";
import office4 from "../../Assets/Images/ofc4.png";
import office5 from "../../Assets/Images/ofc5.png";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {isEmpty} from '../../Services/Utils/Generic'
import {UpdateApplyjobData} from '../../Components/Applications/ApplicationForm'

const itemData = [
  {
    img: office1,
    title: "Breakfast",
  },
  {
    img: office2,
    title: "Burger",
  },
  {
    img: office3,
    title: "Camera",
  },
  {
    img: office4,
    title: "Coffee",
  },
  {
    img: office5,
    title: "Hats",
  },
];

var JobDetailsData = [];
var JobDetailsData1 = [];

const JobData = [
  {icon:<SchoolIcon/>, title:"Work Level"},
  {icon:<WorkIcon/>, title:"Min. Experience"},
  {icon:<AccountBoxRoundedIcon/>, title:"Employee Type"},
  {icon:<PaidRoundedIcon/>, title:"Salary"}
]

export const UpdateJobData = (data) => {
  console.log(data);

  var tempData = ['workLevel', 'experience', 'empType', 'maxSalary'];

  tempData.forEach(function (k, i) {
    JobDetailsData[i] = {icon: JobData[i].icon, title: JobData[i].title, value: data[tempData[i]]};
  });

  console.log(JobDetailsData);

  JobDetailsData1 = {Title: data.title, Overview: data.desc, fullData: data};
}

export default function JobDetails(props) {
  const [jobsData, setJobsData] = React.useState(false);

if(!isEmpty(JobDetailsData1) && !jobsData) {
  return (
    
    <Card
      sx={{
        m: 1,
        border: 0,
        width: props.wide,
        height: props.high,
        borderRadius: 4,
      }}
    >
      <Grid container>
      {/* Job Title */}
      <Grid item container sx={{p:3}}>
        <Grid item md={7.7
        }>
          <Typography
            variant="h6"
            fontSize={27}
            style={{ fontWeight: 600 }}
            
          >
            {JobDetailsData1.Title}
          </Typography>
        </Grid>

        {/* Apply Button */}
        <Grid item sx={{ml:1, mr:1}} md={2.5}>
          <Button
            variant="contained"
            size="large"
            align="center"
            component={Link}
            to="/applyJob"
            sx={{ borderRadius: 8, width:"150px", height:"40px", bgcolor:"#253FC6"}}
            onClick={() => {
              UpdateApplyjobData(JobDetailsData1.fullData)
            }}
          >
            Apply
          </Button>
        </Grid>
        <Grid item md={0.7} >
          <FavoriteBorderOutlinedIcon style={{fontSize:35}}/>
        </Grid>
        
        <Grid item md={0.5} >
          <ShareIcon style={{fontSize:35}}/>
        </Grid>
        
      </Grid>

      {/* subTitle */}
      <Grid item container sx={{ p:3 }}>
        <Grid item>
          <Typography
            variant="h2"
            fontSize={20}
            style={{ fontWeight: 800, color: "#0000FF" }}
          >
            ABC team
          </Typography>
        </Grid>
        <Grid item sx={{ ml: 4, mt:0.3}}>
          <Typography
            variant="h2"
            fontSize={16}
            style={{
              fontWeight: 800,
              color: "#000000",
              fontFamily: "Roboto",
            }}
          >
            Posted 10 days ago
          </Typography>
        </Grid>
      </Grid>
      
      <Grid item container sx={{ ml:3, mt:1}}>
        {JobDetailsData.map((item, i) => (
              <Grid item container md={3} key={i}>
                <Grid item md={2} sx={{mt:1}}>
                  {item.icon}
                </Grid>
                <Grid item container direction={"column"} md={6}>
                <Grid item>
                  <Typography variant="h6"  fontSize={12} style={{ fontWeight: 600 , color:"#999999"}}>
                    {item.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6"  fontSize={12} style={{ fontWeight: 600 }}>
                    {item.value}
                  </Typography>
                </Grid>
                </Grid>
              </Grid>
            
        ))}
      </Grid>

      {/* overview and description */}
      <Grid item container direction="column">
        <Grid item xs={1} sm={1} md={1}>
          <Typography
            variant="h6"
            fontSize={15}
            sx={{ml:3, mt:3}}
            style={{ fontWeight: 800 }}>
            Overview
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <Typography
            variant="h6"
            fontSize={15} sx={{ml:3, mr:3, mt:2}}
            align="justify">
            {
              JobDetailsData1.Overview
            }
          </Typography>
        </Grid>
      </Grid>
      
        <Grid item xs={1} sm={1} md={1}>
          <Typography
            variant="h6"
            fontSize={15}
            sx={{ml: 3, mr:3, mt:3}}
            style={{ fontWeight: 800 }}>
            Gallery
          </Typography>
        </Grid>
      
      <Grid container direction="row" sx={{ ml: 3, mr:3 }}>
        <ImageList sx={{ width: 800, height: 450 }} cols={5} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      </Grid>
    </Card>

  );
} else {
  return (<></>);
}

// React.useEffect(() => {
//   return (
    
//     <Card
//       sx={{
//         m: 1,
//         border: 0,
//         width: props.wide,
//         height: props.high,
//         borderRadius: 4,
//       }}
//     >
//       <Grid container>
//       {/* Job Title */}
//       <Grid item container sx={{p:3}}>
//         <Grid item md={7.7
//         }>
//           <Typography
//             variant="h6"
//             fontSize={27}
//             style={{ fontWeight: 600 }}
            
//           >
//             {JobDetailsData1.Title}
//           </Typography>
//         </Grid>

//         {/* Apply Button */}
//         <Grid item sx={{ml:1, mr:1}} md={2.5}>
//           <Button
//             variant="contained"
//             size="large"
//             align="center"
//             component={Link}
//             to="/ApplyJob"
//             sx={{ borderRadius: 8, width:"150px", height:"40px", bgcolor:"#253FC6"}}
//           >
//             Apply
//           </Button>
//         </Grid>
//         <Grid item md={0.7} >
//           <FavoriteBorderOutlinedIcon style={{fontSize:35}}/>
//         </Grid>
        
//         <Grid item md={0.5} >
//           <ShareIcon style={{fontSize:35}}/>
//         </Grid>
        
//       </Grid>

//       {/* subTitle */}
//       <Grid item container sx={{ p:3 }}>
//         <Grid item>
//           <Typography
//             variant="h2"
//             fontSize={20}
//             style={{ fontWeight: 800, color: "#0000FF" }}
//           >
//             ABC team
//           </Typography>
//         </Grid>
//         <Grid item sx={{ ml: 4, mt:0.3}}>
//           <Typography
//             variant="h2"
//             fontSize={16}
//             style={{
//               fontWeight: 800,
//               color: "#000000",
//               fontFamily: "Roboto",
//             }}
//           >
//             Posted 10 days ago
//           </Typography>
//         </Grid>
//       </Grid>
      
//       <Grid item container sx={{ ml:3, mt:1}}>
//         {JobDetailsData.map((item, i) => (
//               <Grid item container md={3} key={i}>
//                 <Grid item md={2} sx={{mt:1}}>
//                   {item.icon}
//                 </Grid>
//                 <Grid item container direction={"column"} md={6}>
//                 <Grid item>
//                   <Typography variant="h6"  fontSize={12} style={{ fontWeight: 600 , color:"#999999"}}>
//                     {item.title}
//                   </Typography>
//                 </Grid>
//                 <Grid item>
//                   <Typography variant="h6"  fontSize={12} style={{ fontWeight: 600 }}>
//                     {item.value}
//                   </Typography>
//                 </Grid>
//                 </Grid>
//               </Grid>
            
//         ))}
//       </Grid>

//       {/* overview and description */}
//       <Grid item container direction="column">
//         <Grid item xs={1} sm={1} md={1}>
//           <Typography
//             variant="h6"
//             fontSize={15}
//             sx={{ml:3, mt:3}}
//             style={{ fontWeight: 800 }}>
//             Overview
//           </Typography>
//         </Grid>
//         <Grid item xs={3} sm={3} md={3}>
//           <Typography
//             variant="h6"
//             fontSize={15} sx={{ml:3, mr:3, mt:2}}
//             align="justify">
//             {
//               JobDetailsData1.Overview
//             }
//           </Typography>
//         </Grid>
//       </Grid>
      
//         <Grid item xs={1} sm={1} md={1}>
//           <Typography
//             variant="h6"
//             fontSize={15}
//             sx={{ml: 3, mr:3, mt:3}}
//             style={{ fontWeight: 800 }}>
//             Gallery
//           </Typography>
//         </Grid>
      
//       <Grid container direction="row" sx={{ ml: 3, mr:3 }}>
//         <ImageList sx={{ width: 800, height: 450 }} cols={5} rowHeight={164}>
//           {itemData.map((item) => (
//             <ImageListItem key={item.img}>
//               <img
//                 src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
//                 srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//                 alt={item.title}
//                 loading="lazy"
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>
//       </Grid>
//       </Grid>
//     </Card>

//   );
//           }, [jobsData])
  
// if(jobsData)
//   return (null);

    
}
