import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SignUpModal from "../Register/SignUp";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../redux/actions/user";

import {
  Grid,
  Modal,
  Avatar,
  Link,
  TextField,
  Typography,
  Box,
  Button,
  Checkbox,
  Paper,
  FormControlLabel,
} from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        Workshala
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const style = {
  mx: 40,
  my: 8,
  width: 700,
  height: 490,
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const SignIn = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const payload = {
      data: data,
      navigation: navigate,
    };
    dispatch(signIn(payload));
  };

  const handleAutofill = (event) => {
    console.log("clicked: " + event.target.id);
    const candidateUserName = "surendra@gmail.com";
    const recruiterUserName = "surendra.rec@gmail.com";
    const Pass = "surendra";
    event.target.id === "candidate"
      ? reset({ username: candidateUserName, password: Pass })
      : reset({ username: recruiterUserName, password: Pass });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid item container md={12} justifyContent={"center"}>
        <Grid item md={3.5}>
          <Typography variant="h6" color={"red"}>
            Auto Fill Credentials
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Button variant="contained" onClick={handleAutofill} id="candidate">
            Demo Candidate
          </Button>
        </Grid>
        <Grid item md={3}>
          <Button variant="contained" onClick={handleAutofill} id="recruiter">
            Demo Recruiter
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} component={Paper} square>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                {...register("username")}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("password")}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </form>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <SignUpModal />
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default function SignInModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (props.page === "home") {
    return (
      <div>
        <Button
          variant="outlined"
          sx={{ borderRadius: 8 }}
          onClick={handleOpen}
        >
          Sign In
        </Button>

        <Modal
          aria-labelledby="SignIn"
          aria-describedby="SignIn button"
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            <SignIn />
          </Box>
        </Modal>
      </div>
    );
  }
  return (
    <div>
      {props.comp === "link" ? (
        <Box sx={{ mt: 1, float: "right" }}>
          <Link
            variant="body2"
            component="button"
            onClick={() => {
              console.info("I'm a SignIn button.");
              handleOpen();
            }}
          >
            {/* Already a user? Sign In */}
            {props.title}
          </Link>
        </Box>
      ) : (
        <Button
          size="small"
          color="primary"
          variant="contained"
          sx={{ borderRadius: 8 }}
          onClick={() => {
            console.info("I'm a SignIn button.");
            handleOpen();
          }}
        >
          {props.title}
        </Button>
      )}

      <Modal
        aria-labelledby="SignIn"
        aria-describedby="SignIn button"
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <SignIn />
        </Box>
      </Modal>
    </div>
  );
}
