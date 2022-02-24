import * as React from 'react';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from "react-router-dom";
import {  Box, Button, CardContent, CardMedia, CardActionArea, Card, Typography } from "@mui/material";
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot} from '@mui/lab';
import blog_1 from '../Assets/Images/blog_1.png'
import blog_2 from '../Assets/Images/blog_2.jpeg'
import blog_3 from '../Assets/Images/blog_3.jpeg'
import blog_4 from '../Assets/Images/blog_4.jpeg'
import blog_5 from '../Assets/Images/blog_5.jpeg'

const CardData = [
    {img: blog_1, 
        title: '', 
    text: 'The coronavirus pandemic has not only had a significant impact on the global economy but also your job search. It has caused stock market volatility and impacted various industries. If you have a current job, most likely you’re doing it from your home. Some small businesses have been forced to close temporarily, whereas large businesses have been affected by the strain of losing business and a disrupted supply chain. There are predictions that the unemployment rate in the U.S. could reach 20%, according to NBC News reporting.', 
    contentTitle: 'How to find a job during the coronavirus pandemic', 
    contentText: ''},
    {img: blog_2, title: '', 
    text: 'Highest paying jobs: Digital transformation across industries because of the pandemic coupled with advancements in technology has brought about a change in the skills required across various business functions. Companies have had to quickly move their operations online and increasingly leverage technology and data to reach customers, understand their needs and provide products and services in an increasingly competitive business environment.', 
    contentTitle: '5 highest paying jobs to look out for in 2022', 
    contentText: ''},
    {img: blog_3, title: '', text: 'A job board is a type of employment website that serves job ads posted by employers. Job boards can be general or focus on a specific industry like IT, retail, healthcare, or hospitality. Job sites connect employers with potential employees by aggregating listings for open positions.', 
    contentTitle: 'Top Job Postings of 2022', 
    contentText: ''},
    {img: blog_4, title: '', 
    text: 'Most workers who say their job responsibilities can mainly be done from home say that, before the pandemic, they rarely or never teleworked. Only one-in-five say they worked from home all or most of the time. Now, 71% of those workers are doing their job from home all or most of the time.', 
    contentTitle: 'Work from home during pandemic', contentText: ''},
    {img: blog_5, title: '', 
    text: 'AI is assisting recruitment businesses in doing their duties more quickly and efficiently than ever before. It can swiftly analyze incoming applications for keywords, talents, and other qualities in order to identify the best prospects.', 
    contentTitle: 'Role of AI in Job Search & Recruiting', contentText: ''}
]
const CardTemplate = (props) => {
        return (
          <Card >
            <CardActionArea>
              <CardMedia
                component="img"
                height="40%"
                image={props.img}
                alt="blog"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {props.text}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
}


export default function CustomizedTimeline() {
  return (
      <Box>
    <Button variant="contained" sx={{width:"150px", mt:2, ml:2}} component={Link} to="/"> 
                Back to Home
                </Button>
    <Timeline position="alternate">
        {CardData.map((item, i) => (
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <CardTemplate title={item.title} text={item.text} img={item.img}/>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} alignSelf={"center"}>
          <Typography variant="h6" component="span" >
            {item.contentTitle}
          </Typography>
          <Typography variant="h6">{item.contentText}</Typography>
        </TimelineContent>
      </TimelineItem>
      ))}
    </Timeline>
    </Box>
  );
}
