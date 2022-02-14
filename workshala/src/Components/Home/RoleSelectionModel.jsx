import * as React from "react";
import recImg from "../../Assets/Images/recruiter.jpeg";
import jsImg from "../../Assets/Images/job_seeker.jpeg";
import SignUpModal from "../Auth/SignUpModal";
import SignInModal from "../Auth/SignInModal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
    Grid,
    Modal,
    CardMedia,
    Typography,
    Box,
    Button,
    CardContent,
    Card
  } from "@mui/material";


  const style = {
    largeIcon: {
      width: 160,
      height: 160,
    },
    model: {
      mx: 40,
      my: 8,
      width: 700,
      height: 475,
      bgcolor: "background.paper",
      border: "2px solid #000",
      borderRadius: 4,
      boxShadow: 24,
      p: 4,
    },
  };

  const theme = createTheme();

  const RoleCardTemplate = (props) => {
    return (
      <Card
        sx={{
          mx: 4,
          my: 4,
          height: 400,
          borderRadius: 2,
        }}
      >
        <CardMedia
          component="img"
          height="250"
          image={props.img}
          alt="Recruiter"
        />
        <CardContent>
          <Typography variant="h5" color="blue">
            {props.title}
          </Typography>
          <Grid container>
            <Grid>
              <Typography sx={{ mt: 5, fontSize: 17 }}>{props.desc}</Typography>
            </Grid>
            <Grid>
              <SignUpModal flag={1} role={props.role}/>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  };

  export default function RoleSelectionModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Box
          sx={{
            float: "right",
          }}
        >
          <Button variant="text" onClick={handleOpen}>
            Join Now
          </Button>
        </Box>
  
        <Modal
          aria-labelledby="Role Selection"
          aria-describedby="Role Selection box"
          open={open}
          onClose={handleClose}
        >
          <Box sx={style.model}>
            <ThemeProvider theme={theme}>
              <Grid container>
                <Grid item xs>
                  <RoleCardTemplate role="recruiter"
                    img={recImg}
                    title={"Do you want to Hire?"}
                    desc={"Post Job for Free"}
                  />
                </Grid>
                <Grid item xs>
                  <RoleCardTemplate role="candidate"
                    img={jsImg}
                    title={"Do you want Job?"}
                    desc={"Search Job for Free"}
                  />
                </Grid>
              </Grid>
                <SignInModal/>
            </ThemeProvider>
          </Box>
        </Modal>
      </div>
    );
  }