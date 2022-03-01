import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import dev from "../../../Assets/Images/dev.png";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { updateUserInfo } from "../../../redux/actions/user";
import { useNavigate } from "react-router-dom";
import Loader from "../../../Services/Utils/Loader";
import { fetchProfile } from "../../../redux/actions/user";

import {
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import { TextHeading2 } from "../../Common/Common";
import { GetRole } from "../../../Services/Utils/Generic";

let imgData = [];
const handleImgUpload = (event) => {
  if (event.target.files[0]) {
    const selectedFile = event.target.files[0];

    var reader = new FileReader();
    reader.onloadend = async function () {
      const base64Response = await fetch(reader.result);
      const blob = await base64Response.blob();

      imgData = {
        file: blob,
        name: selectedFile.name,
        dataType: "image/jpeg",
      };
    };
    reader.readAsDataURL(selectedFile);
  }
};

const AboutMeTile = () => {
  const { register } = useFormContext();
  const Labels = [
    { title: "About Yourself", value: "about", width: "100%" },
    { title: "Email", value: "email", width: "50%" },
    { title: "Contact", value: "mobile" },
    { title: "Address", value: "address", width: "100%" },
  ];

  return (
    <Paper sx={{ borderRadius: 4, p: 2 }}>
      <Grid container spacing={1}>
        <Grid item md={12}>
          <Typography variant="h6" style={{ fontWeight: 800 }} sx={{ p: 2 }}>
            Edit Profile
          </Typography>
        </Grid>

        <Grid item container>
          <Grid item container sm={6} md={6} spacing={1}>
            <Grid item container md={12} spacing={1}>
              <Grid item md={6} alignSelf={"center"} textAlign={"right"}>
                <TextHeading2 text="First Name" />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="firstName"
                  {...register("firstName")}
                ></TextField>
              </Grid>
            </Grid>
            <Grid item container md={12} spacing={1}>
              <Grid item md={6} alignSelf={"center"} textAlign={"right"}>
                <TextHeading2 text="Last Name" />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="lastName"
                  fullWidth
                  {...register("lastName")}
                ></TextField>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container md={6} justifyContent={"center"}>
            <Grid item>
              <Avatar src={dev} sx={{ width: 120, height: 120 }} />
            </Grid>
            <Grid item>
              <IconButton color="primary" component="label">
                <input
                  type="file"
                  id="profileImgUpload"
                  hidden
                  {...register("profileImg", {
                    onChange: (e) => {
                      handleImgUpload(e);
                    },
                  })}
                />
                <ModeEditOutlineIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

        {Labels.map((item, i) => (
          <Grid item container key={i} md={12} spacing={1}>
            <Grid item md={3} alignSelf={"center"} textAlign={"right"}>
              <TextHeading2 text={item.title} />
            </Grid>
            <Grid item md={9}>
              <TextField
                id={item.value}
                style={{ width: item.width }}
                {...register(item.value)}
              ></TextField>
            </Grid>
          </Grid>
        ))}

        <Grid item md={3} alignSelf={"center"} textAlign={"right"}>
          <TextHeading2 text="City" />
        </Grid>
        <Grid item md={3}>
          <TextField id="City" {...register("city")}></TextField>
        </Grid>

        <Grid item md={3} alignSelf={"center"} textAlign={"right"}>
          <TextHeading2 text="State" />
        </Grid>
        <Grid item md={3}>
          <TextField id="State" {...register("state")}></TextField>
        </Grid>

        <Grid item md={3} alignSelf={"center"} textAlign={"right"}>
          <TextHeading2 text="ZipCode" />
        </Grid>
        <Grid item md={3}>
          <TextField id="zipCode" {...register("pin")}></TextField>
        </Grid>

        <Grid item md={3} alignSelf={"center"} textAlign={"right"}>
          <TextHeading2 text="Country" />
        </Grid>
        <Grid item md={3}>
          <TextField id="country" {...register("country")}></TextField>
        </Grid>

        <Grid item md={3} alignSelf={"center"} textAlign={"right"}>
          <TextHeading2 text="Password" />
        </Grid>
        <Grid item md={3}>
          <TextField disabled id="Password" label="**********"></TextField>
        </Grid>
        <Grid item md={6} textAlign={"left"} alignSelf={"center"}>
          <Button variant="outlined">Reset Password</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default function ProfileDetails(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userInfo);

  const methods = useForm();

  const role = GetRole();

  const { reset } = methods;

  const onSubmit = (data) => {
    delete data["profileImg"];
    const payload = {
      data: data,
      imgData: imgData,
      role: role,
      navigation: navigate,
    };

    dispatch(updateUserInfo(payload));
  };

  React.useEffect(() => {
    if (
      userInfo !== undefined &&
      userInfo.userInfo !== undefined &&
      userInfo.userInfo.status &&
      userInfo.userInfo.data !== undefined &&
      userInfo.userInfo.data.result !== undefined
    ) {
      const defaultData = userInfo.userInfo.data.result[0];

      //remove the unwanted columns from retrreived data
      ["createdAt", "updatedAt", "className", "__type", "objectId"].forEach(
        (item) => {
          delete defaultData[item];
        }
      );

      reset(defaultData); // reset reports infinite render if used outside useEffect
    }
    //setValue({firstName: "first"})
  }, [userInfo]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    // if(isEmpty(userInfo)) {
    dispatch(fetchProfile()); //TODO: Don't call if there's no change in state

    //   this will populate data only if userInfo is there, on refresh the userinfo need to be fetched again
    if (
      userInfo !== undefined &&
      userInfo.userInfo !== undefined &&
      userInfo.userInfo.status &&
      userInfo.userInfo.data !== undefined &&
      userInfo.userInfo.data.result !== undefined
    ) {
      reset(userInfo.userInfo.data.result[0]); // reset reports infinite render if used outside useEffect
    }
    //}
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (userInfo.loading) {
    return <Loader />;
  } else {
    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid item md={12}>
              <AboutMeTile />
            </Grid>

            <Grid item md={6} textAlign={"end"}>
              <Button variant="contained" type="submit">
                Save Changes
              </Button>
            </Grid>
            <Grid item md={6}>
              <Button
                variant="contained"
                component={Link}
                to={"/" + role + "/profile"}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    );
  }
}
