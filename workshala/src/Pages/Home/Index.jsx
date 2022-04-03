import * as React from "react";
import homeImg from "../../Assets/Images/home.jpeg";
import Footer from "./Footer";
import Body from "./Body";
import { Grid, Box, Typography } from "@mui/material";
import Header from "./Header";
import { isEmpty } from "../../Utils/Generic";
import IconRa from "../../Assets/Images/react.jpg";
import {
  Avatar,
  CardActions,
  CardContent,
  Card,
  CardActionArea,
} from "@mui/material";
import SignInModal from "../Login/SignIn";

export const JobTiles = (props) => {
  return (
    <Grid item container>
      <Grid item container md={12} spacing={1} sx={{ mt: 2 }}>
        {props.data ? (
          props.data.map((item, i) => (
            <Grid item key={i}>
              <CardTemplate
                title={item.title}
                subTitle={item.desc}
                exp={item.experience}
              />
            </Grid>
          ))
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  );
};

const CardTemplate = (props) => {
  return (
    <Card sx={{ borderRadius: 8, p: 2 }}>
      <CardActionArea onClick={props.click}>
        <CardContent align="center">
          <Avatar src={IconRa} />
          <Typography gutterBottom variant="h6">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.subTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.exp}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container>
          <Grid item md={12} align={"center"}>
            <SignInModal title="Apply" comp="button" />
          </Grid>
          <Grid item md={12} align="right" sx={{ mt: 5 }}>
            {/* View more */}
            <SignInModal title="view more" comp="link" />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default function Home() {
  const myStyle = {
    backgroundImage: `url(${homeImg})`,
    backgroundSize: "cover",
    height: "490px",
    display: "flex",
    width: "100%",
  };

  const [searchData, setSearchData] = React.useState("");

  // const quickViewToggle = () => {
  //   setQuickViewOpen(!quickViewOpen);
  // };

  // const quickViewClose = () => {
  //   setQuickViewOpen(false);
  // };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <Grid container style={myStyle}>
          <Grid item xs={12} sm={12} md={12}>
            <Header />
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={{ mt: 25 }}>
            <Body setSearchData={setSearchData} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={12} sx={{ p: 2 }}>
        {isEmpty(searchData) ? (
          <Footer />
        ) : (
          <Box
            sx={{
              float: "center",
              border: 1,
              backgroundColor: "floralwhite",
              p: 2,
              borderRadius: 8,
            }}
          >
            <Typography
              variant="h5"
              style={{}}
              color="text.primary"
              sx={{ p: 2 }}
            >
              Found {searchData.length} Jobs...
            </Typography>
            <JobTiles data={searchData} />
          </Box>
        )}
      </Grid>
    </Grid>
  );
}
