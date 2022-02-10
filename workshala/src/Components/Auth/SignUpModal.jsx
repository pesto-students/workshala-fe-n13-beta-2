import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouteLink } from "react-router-dom";
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {postSignUp}  from '../../redux/actions/signUp';
import { connect } from 'react-redux';
import signUpRed from '../../redux/reducers/signUp'
import {useNavigate} from "react-router-dom";

import {
  Grid,
  Modal,
  Link,
  TextField,
  Typography,
  IconButton,
  Box,
  Button,
  Checkbox,
  Paper,
  FormControlLabel,
} from "@mui/material";

import SignInModal from "./SignInModal";
import {useForm} from 'react-hook-form';

const theme = createTheme();

const style = {
  mx: 40,
  my: 8,
  width: 700,
  height: 475,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

function Test () {
  //const status = useSelector(state => state.signUp.status);

  
  //
}



const SignUpForm = (props) => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const signUp = useSelector(state => state.signUp.postSignUp);
  const status = useSelector(state => state.signUp.status);

  const onSubmit = data => {
    console.log(data);
    
    dispatch(postSignUp(data));
                                          //TODO: check for status and then navigate
    navigate('Dashboard')
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sm={12} md={12} component={Paper} elevation={0} square>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" color="blue">
            SignUp
          </Typography>
          <Typography component="h2" variant="h6">
            Please fill in the below form to create an account
          </Typography>
          
          <form onSubmit={handleSubmit(onSubmit)}>

            {/*
            TODOD:
            1. Email address validation (use regex)
            2. Password and confirm pass should be same
            */}
          
            <Grid container spacing={1}>
              <Grid item xs>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="firstName"
                  autoFocus
                  {...register('firstName')}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lastName"
                  {...register('lastName')}
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              
              {...register('email')}
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
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
              
            />
          {/*  <FormControlLabel
              control={<Checkbox value="TAC" color="primary" />}
              label="I agree to the  Terms of Service and the Code of Conduct"
          />*/}
            <Button
              type="submit"
              fullWidth
              variant="contained"
            >
              Sign Up
            </Button>
            <SignInModal />
          
          </form>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};



 function SignUpModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const NavigateTo = () => {
  //   const navigate = useNavigate();
  //   navigate('Home')
  // }

  if (props.flag) {
    return (
      <div>
        <IconButton
          aria-label="recruiter"
          sx={{ mx: 1.5, mt: 2.5 }}
          onClick={handleOpen}
        >
          <ArrowForwardIcon style={{ fontSize: 50, color: "blue" }} />
        </IconButton>
        <Modal
          aria-labelledby="SignIn"
          aria-describedby="SignIn button"
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            <SignUpForm />
          </Box>
        </Modal>
      </div>
    );
  }

  return (
    <div>
      <Link
        variant="body2"
        component="button"
        onClick={() => {
          console.info("I'm a SignIn button.");
          handleOpen();
        }}
      >
        Don't have an account? Sign Up
      </Link>

      <Modal
        aria-labelledby="SignIn"
        aria-describedby="SignIn button"
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <SignUpForm />
        </Box>
      </Modal>
    </div>
  );
}

export default SignUpModal;
