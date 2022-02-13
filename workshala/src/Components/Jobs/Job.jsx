import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconRa from "../../Assets/Images/react.jpg";
import {
  Avatar,
  Button,
  CardActions,
  Grid,
  Select,
  MenuItem,
  TextField,
  Chip,
  Stack,
  Typography,
  CardContent,
  InputAdornment,
  Card,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";

const jobsList = [
  {
    title: "ABC company",
    subTitle: "Home Food Delivery",
    exp: "3 - 5 Years",
  },
  {
    title: "ABC company",
    subTitle: "Home Food Delivery",
    exp: "3 - 5 Years",
  },
  {
    title: "ABC company",
    subTitle: "Home Food Delivery",
    exp: "3 - 5 Years",
  },
  {
    title: "ABC company",
    subTitle: "Home Food Delivery",
    exp: "3 - 5 Years",
  },
  {
    title: "ABC company",
    subTitle: "Home Food Delivery",
    exp: "3 - 5 Years",
  },
  {
    title: "ABC company",
    subTitle: "Home Food Delivery",
    exp: "3 - 5 Years",
  },
  {
    title: "ABC company",
    subTitle: "Home Food Delivery",
    exp: "3 - 5 Years",
  },
  {
    title: "ABC company",
    subTitle: "Home Food Delivery",
    exp: "3 - 5 Years",
  },
  {
    title: "ABC company",
    subTitle: "Home Food Delivery",
    exp: "3 - 5 Years",
  },
];

const suggestions = [
  {
    label: "Technician",
    color: "primary",
  },
  {
    label: "Mechanic",
    color: "success",
  },
  {
    label: "Delivery Boy",
    color: "success",
  },
  {
    label: "Builder",
    color: "success",
  },
];

const CardTemplate = (props) => {
  return (
    <Card sx={{ borderRadius: 8, p: 2 }}>
      <CardActionArea onClick={props.click}>
        <CardContent align="center">
          <Avatar src={IconRa} />
          <Typography gutterBottom variant="h6">
            {props.title}{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.subTitle}{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
              to="/ApplyJob"
            >
              Apply
            </Button>
          </Grid>
          <Grid item md={12} align="right" sx={{ mt: 5 }}>
            <Button
              size="small"
              color="primary"
              style={{ fontSize: 9 }}
              component={Link}
              to="/CompanyDetails"
            >
              View more
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default function Job({
  quickViewToggle,
  quickViewClose,
  quickViewOpen,
}) {
  const [sort, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid container>
      {/* Search bar */}
      <Grid item md={12}>
        <TextField
          sx={{
            width: "96%",
            m: 1,
            p: 1,
            borderRadius: 4,
            backgroundColor: "white",
            border: 0,
          }}
          size="small"
          border={0}
          placeholder="Search by Title, company or keyword..."
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <Button
                  variant="contained"
                  sx={{ width: 100, borderRadius: 4 }}
                  startIcon={<SearchIcon />}
                >
                  Find
                </Button>
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
        />
      </Grid>

      <Grid item container md={12}>
        <Grid
          item
          md={1.5}
          sx={{
            ml: 2,
            mt: 3,
          }}
        >
          <Typography>Suggestions</Typography>
        </Grid>
        <Grid item sx={{ mt: 2 }} xs={0.5} sm={0.5} md={5}>
          <Stack direction="colunm">
            {suggestions.map((item, i) => (
              <Chip
                key={i}
                label={item.label}
                color={item.color}
                sx={{ ml: 1 }}
              />
            ))}{" "}
          </Stack>
        </Grid>
        <Grid item sx={{ mt: 2 }} xs={0.5} sm={0.5} md={5} align="right">
          <Select
            sx={{ height: 35, width: 120, borderRadius: 4 }}
            value={sort}
            displayEmpty
            onChange={handleChange}
          >
            <MenuItem value="">Newest</MenuItem>
            <MenuItem value="Oldest">Oldest</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <Grid item container md={12} spacing={1} sx={{ mt: 2 }}>
        {jobsList.map((item, i) => (
          <Grid item key={i}>
            <CardTemplate
              title={item.title}
              subTitle={item.subTitle}
              exp={item.exp}
              click={quickViewToggle}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
