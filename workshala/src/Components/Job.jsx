import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconRa from "../Images/react.jpg";
import {
  Avatar,
  Button,
  CardActionArea,
  CardActions,
  Grid,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const label = { inputProps: { "aria-label": "Salary" } };
const jobsList = [
  { title: "ABC company", subTitle: "Home Food Delivery" },
  { title: "ABC company", subTitle: "Home Food Delivery" },
  { title: "ABC company", subTitle: "Home Food Delivery" },
  { title: "ABC company", subTitle: "Home Food Delivery" },
];

const CardTemplate = (props) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 8 }}>
      <CardContent>
        <Avatar src={IconRa} sx={{ marginLeft: 6, mt: 2 }} />
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginLeft: 1 }}
        >
          {props.subTitle}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          color="primary"
          justifyContent="center"
          sx={{ marginLeft: 4 }}
        >
          View more
        </Button>
      </CardActions>
    </Card>
  );
};
function Job() {
  return (
    <Grid container>
      <Grid item sx={{ mt: 2 }}>
        <Typography>Suggestions</Typography>
      </Grid>
      <Grid item xs={0.5} sm={0.5} md={0.5}>
        <Stack spacing={1} alignItems="right" sx={{ marginLeft: 30, mt: 2 }}>
          <Stack direction="colunm" spacing={1}>
            <Chip label="Technician" color="primary" sx={{ marginRight: 1 }} />
            <Chip
              label="Mechanic"
              color="success"
              style={{ backgroundColor: "#0000FF" }}
              sx={{ marginRight: 1, marginLeft: 1 }}
            />
            <Chip
              label="Delivery Boy"
              color="success"
              style={{ backgroundColor: "#0000FF" }}
              sx={{ marginRight: 1, marginLeft: 1 }}
            />
            <Chip
              label="Builder"
              style={{ backgroundColor: "#0000FF" }}
              color="success"
              sx={{ marginRight: 1 }}
            />
          </Stack>
        </Stack>
      </Grid>

      <Grid container sx={{ mt: 2 }}>
        <Grid item>
          <Typography>Showing 193 job results</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ marginLeft: 80, mt: 1 }}>Salary</Typography>
        </Grid>
        <Grid item>
          {" "}
          <Switch {...label} defaultChecked />
        </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>

      {jobsList.map((item) => (
        <Grid container>
          <Grid item sx={{ marginLeft: 1, mt: 2, marginRight: 1 }}>
            <CardTemplate title={item.title} subTitle={item.subTitle} />
          </Grid>
          <Grid item sx={{ marginLeft: 1, mt: 2, marginRight: 1 }}>
            <CardTemplate title={item.title} subTitle={item.subTitle} />
          </Grid>
          <Grid item sx={{ marginLeft: 1, mt: 2, marginRight: 1 }}>
            <CardTemplate title={item.title} subTitle={item.subTitle} />
          </Grid>
          <Grid item sx={{ marginLeft: 1, mt: 2, marginRight: 1 }}>
            <CardTemplate title={item.title} subTitle={item.subTitle} />
          </Grid>
          <Grid item sx={{ marginLeft: 1, mt: 2, marginRight: 1 }}>
            <CardTemplate title={item.title} subTitle={item.subTitle} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default Job;
