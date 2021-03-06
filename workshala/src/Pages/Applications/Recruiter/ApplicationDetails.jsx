import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Typography,
  FormControl,
  Paper,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Box,
} from "@mui/material";
import Loader from "../../../Utils/Loader";
import { isEmpty } from "../../../Utils/Generic";
import { updateApplication } from "../../../redux/actions/applications";

let flag = 0;
let ApplnId = [];
let payload = [];
let DefaultStatus = "Pending";
export const updateStatus = (data) => {
  ApplnId = data.id;
  DefaultStatus = data.status;
};

const TileHeading = (props) => {
  return (
    <Grid item md={11.5} sx={{ ml: 2, mt: 2 }}>
      <Typography
        variant="h6"
        fontSize={props.size}
        style={{ fontWeight: 600 }}
      >
        {props.heading}
      </Typography>
    </Grid>
  );
};
const AboutMeTile = (props) => {
  const applications = useSelector((state) => state.applications);
  const dispatch = useDispatch();

  const [defaultState, setdefaultState] = React.useState(DefaultStatus);
  const menuItems = ["Pending", "In-Progress", "On-Hold", "Hired", "Rejected"];

  const handleChange = (event) => {
    setdefaultState(event.target.value);
  };

  const handleUpdate = (event) => {
    payload = {
      objectId: ApplnId,
      data: { status: defaultState },
    };
    //update in DB
    dispatch(updateApplication(payload));
  };

  if (
    applications !== undefined &&
    !applications.loading &&
    applications.applications.status === "200" &&
    !flag &&
    !isEmpty(payload) //workaround
  ) {
    alert("Application Status updated Successfully...!!!");
    flag = 1;
  }

  return (
    <Paper sx={{ borderRadius: 4, p: 2 }}>
      <Grid container>
        <Grid item container md={12}>
          <Grid item md={4}>
            <TileHeading heading={props.data.user} size={25} />
          </Grid>
          <Grid item md={7.5} sx={{ textAlign: "end", mt: 3, marginRight: 1 }}>
            <Box sx={{ width: 300 }} style={{ float: "right" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  {defaultState}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={defaultState}
                  label={defaultState}
                  onChange={handleChange}
                >
                  {menuItems.map((item, i) => (
                    <MenuItem value={item} key={i}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button variant="contained" sx={{ mt: 1 }} onClick={handleUpdate}>
                Update
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid item container sx={{ p: 2 }} md={12}>
          <Grid item md={12}>
            <Typography
              variant="h6"
              fontSize={16}
              style={{ fontWeight: 600, fontFamily: "Fira Sans" }}
            >
              About Applicant
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography variant="h6" fontSize={15} align="justify">
              {props.data.AboutMeText}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

const TileRow = (props) => {
  return (
    <Grid item container spacing={4} sx={{ p: 1 }}>
      <Grid item md={6}>
        <Typography
          variant="h6"
          fontSize={18}
          textAlign={"end"}
          style={{ fontFamily: "Fira Sans", fontWeight: 550 }}
        >
          {props.left}
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Typography
          variant="h6"
          fontSize={18}
          textAlign={"start"}
          style={{ fontFamily: "Fira Sans" }}
        >
          {props.right}
        </Typography>
      </Grid>
    </Grid>
  );
};

const TileTemplate = (props) => {
  return (
    <Paper sx={{ borderRadius: 4, p: 2 }}>
      <TileHeading heading={props.heading} size={20} />

      <Grid item container md={12}>
        {props.data.map((item, i) => (
          <TileRow left={item.title} right={item.val} key={i} />
        ))}
      </Grid>
    </Paper>
  );
};

export default function ProfileDetails(props) {
  if (true) {
    const userData = props.data;

    const AboutMeData = {
      user:
        "Applicant:  " +
        (userData ? userData.firstName : "John") +
        " " +
        (userData ? userData.lastName : "Doe"),
      AboutMeText: userData ? userData.bio : "This is a Dummy Profile",
    };

    const BasicData = [
      { title: "Age", val: userData ? userData.age : "18" },
      { title: "From", val: userData ? userData.city : "Hyderabad" },
      { title: "Date of Birth", val: userData ? userData.dob : "12/01/1994" },
      { title: "Gender", val: userData ? userData.gender : "Male" },
      { title: "Profile", val: userData ? userData.profile : "Mechanic" },
      { title: "Password", val: "*****" },
    ];

    const ContactData = [
      { title: "Mobile", val: userData ? userData.mobile : "+91-0987654321" },
      { title: "Email", val: userData ? userData.email : "dummy@gmail.com" },
      { title: "Address", val: userData ? userData.address : "ABC Street" },
      { title: "City", val: userData ? userData.city : "Hyderabad" },
      { title: "Country", val: userData ? userData.country : "India" },
      { title: "PinCode", val: userData ? userData.pin : "789123" },
    ];

    return (
      <Grid container spacing={1}>
        <Grid item md={12}>
          <AboutMeTile data={AboutMeData} />
        </Grid>

        <Grid item container spacing={1}>
          <Grid item md={6}>
            <TileTemplate data={BasicData} heading="Basic Details" />
          </Grid>
          <Grid item md={6}>
            <TileTemplate data={ContactData} heading="Contact Details" />
          </Grid>
        </Grid>

        {/* <Grid item md={12}>
          <SkillsForm data={userData.skills}/>
      </Grid>

      <Grid item md={12}>
          <ExperienceTile data={userData.experience}/>
      </Grid>

      <Grid item md={12}>
          <ResumeTile data={userData.resume ? userData.resume.url : null} uploadedOn={userData.updatedAt}/>
      </Grid> */}
      </Grid>
    );
  } else {
    return <Loader />;
  }
}
