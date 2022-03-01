import * as React from "react";
import IconRa from "../../../Assets/Images/react.jpg";
import {
  Avatar,
  Button,
  CardActions,
  Grid,
  Chip,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobsList } from "../../../redux/actions/jobs";
import Loader from "../../../Services/Utils/Loader";
import { FetchedData } from "../../../Pages/Candidate/CompanyDetails";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { isEmpty } from "../../../Services/Utils/Generic";

export const updateJobList = (data) => {
  data.forEach(function (k, i) {
    jobsList[i] = {
      title: data[i].title,
      desc: data[i].desc,
      experience: data[i].experience,
    };
  });
};

const colorsList = [
  "warning",
  "info",
  "success",
  "error",
  "secondary",
  "primary",
];

const CardTemplate = (props) => {
  let col = "";
  function GetTileColor(data, title) {
    Object.values(data).forEach(function (k, i) {
      if (k.label === title) {
        col = k.colored;

        switch (col) {
          case "warning":
            col = "#ed6c02";
            break;
          case "info":
            col = "#0288d1";
            break;
          case "success":
            col = "#2e7d32";
            break;
          case "error":
            col = "#d32f2f";
            break;
          case "secondary":
            col = "#9c27b0";
            break;
          case "primary":
            col = "#1976d2";
            break;
          default:
            col = "#1976d2";
            break;
        }
      }
    });
  }
  GetTileColor(props.backColor, props.title);
  return (
    <Card sx={{ borderRadius: 8, p: 2, backgroundColor: col }}>
      <CardActionArea onClick={props.click}>
        <CardContent align="center">
          <Avatar src={IconRa} />
          <Typography gutterBottom variant="h6" style={{ color: "white" }}>
            {props.title}{" "}
          </Typography>
          <Typography variant="body2" style={{ color: "white" }}>
            {props.subTitle}{" "}
          </Typography>
          <Typography variant="body2" style={{ color: "white" }}>
            {props.exp}{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container>
          <Grid item md={12} align={"center"}>
            <Button
              size="small"
              color="primary"
              variant="contained"
              style={{ width: 100 }}
              component={Link}
              to="/candidate/companyDetails"
              onClick={() => {
                FetchedData(props.itemData);
              }}
            >
              Apply
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export const JobTiles = (props) => {
  return (
    <Grid item container>
      <Grid item container md={12} spacing={1} sx={{ mt: 2 }}>
        {props.data ? (
          props.data.map((item, i) => (
            <Grid item md={3} key={i}>
              <CardTemplate
                title={item.title}
                backColor={props.colorList}
                subTitle={item.desc}
                exp={item.experience}
                // click={quickViewToggle}

                itemData={item.fullData}
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

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

let jobsList = [];
let chipTitles = [];

export default function Job({
  quickViewToggle,
  quickViewClose,
  quickViewOpen,
}) {
  const [chipData, setChipData] = React.useState([]);

  const dispatch = useDispatch();

  const jobsInfo = useSelector((state) => state.jobs);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
    console.log(jobsList);
    jobsList.forEach(function (k, i) {
      if (jobsList[i].title === chipToDelete.label) delete jobsList[i];
    });
  };

  React.useEffect(() => {
    dispatch(getJobsList());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (
      jobsInfo !== undefined &&
      jobsInfo.status &&
      jobsInfo.jobs !== undefined &&
      jobsInfo.jobs.data !== undefined &&
      jobsInfo.jobs.data.result !== undefined
    ) {
      const data = jobsInfo.jobs.data.result;

      data.forEach(function (k, i) {
        jobsList[i] = {
          id: data[i].objectId,
          title: data[i].title,
          desc: data[i].desc,
          experience: data[i].experience,
          fullData: data[i],
        };

        if (chipTitles.indexOf(data[i].title) === -1) {
          chipTitles.push(data[i].title);
        }
      });
      const dataChips = [];
      chipTitles.forEach(function (k, i) {
        dataChips[i] = { label: chipTitles[i], key: i };
      });
      setChipData(dataChips);
    }
  }, [jobsInfo]);

  if (!isEmpty(jobsList)) {
    const colors = {};
    return (
      <Grid container direction={"column"}>
        <Grid item container style={{ borderRadius: 8, p: 2 }}>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              listStyle: "none",
              p: 0.5,
              m: 0,
              backgroundColor: "lightgray",
            }}
            component="ul"
          >
            {chipData.map((data, i) => {
              colors[i] = { label: data.label, colored: colorsList[i] };
              return (
                <ListItem key={i}>
                  <Chip
                    color={colorsList[i]}
                    label={data.label}
                    deleteIcon={<DeleteIcon />}
                    onDelete={handleDelete(data)}
                    style={{ minWidth: 150 }}
                  />
                </ListItem>
              );
            })}
          </Paper>
        </Grid>
        <JobTiles data={jobsList} colorList={colors} />
      </Grid>
    );
  } else {
    return <Loader />;
  }
}
