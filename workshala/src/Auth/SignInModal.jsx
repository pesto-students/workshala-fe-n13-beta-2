import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SignUpModal from "./SignUpModal"

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
    FormControlLabel
  } from "@mui/material";

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="">
          Workshala
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
const theme = createTheme();

const style = {
  mx:40,
  my:8,
  width: 700,
  height: 470,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius:4,
  boxShadow: 24,
  p: 4
};

const SignIn = () => {
    return(
      <ThemeProvider theme={theme}>
        
          <Grid item xs={12} sm={12} md={12} component={Paper} elevation={0} square>
            <Box
              sx={{
                
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
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
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  to="/dashboard"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                  <SignUpModal/>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        
      </ThemeProvider>
    );
  }

export default function SignInModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if(props.page === "home") {
  return (
    <div>
        <Button variant="outlined" sx={{ borderRadius: 8, my: 3 }} onClick={handleOpen}>
              Sign In
        </Button>
        
        <Modal
            aria-labelledby="SignIn"
            aria-describedby="SignIn button"
            open={open}
            onClose={handleClose}>
            <Box sx={style}>
                <SignIn/>
            </Box>
      </Modal>
    </div>
  );
  }
  return (
    <div>
        <Box sx={{ mt: 1, float: "right" }}>
                
                <Link variant="body2"
                      component="button"
                        onClick={() => {
                        console.info("I'm a SignIn button.");
                            handleOpen()
                        }}>Already a user? Sign In
                    </Link>
              </Box>

        
        <Modal
            aria-labelledby="SignIn"
            aria-describedby="SignIn button"
            open={open}
            onClose={handleClose}>
            <Box sx={style}>
                <SignIn/>
            </Box>
      </Modal>
    </div>
  );
}