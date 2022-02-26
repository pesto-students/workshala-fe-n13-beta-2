import * as React from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import { Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";

export default function CandidateLayout({ children }) {
  const [dashBoardSideNavOpen, setDashBoardSideNavOpen] = React.useState(true);

  const dashBoardSideNavToggle = () => {
    setDashBoardSideNavOpen(!dashBoardSideNavOpen);
  };
  const dashBoardSideNavClose = () => {
    setDashBoardSideNavOpen(false);
  };

  const theme = createTheme({
    palette: {
      background: {
        default: "#ff00ff"
      }
    }
  });

    return (
      <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#EDEAEA" }
        }}
      />
        <Grid container >
            <Grid item width="20%">
                <SideBar 
                        dashBoardSideNavOpen={dashBoardSideNavOpen}
                        dashBoardSideNavToggle={dashBoardSideNavToggle}
                        dashBoardSideNavClose={dashBoardSideNavClose}/>
            </Grid>
            <Grid item container direction="row" width={dashBoardSideNavOpen ? "80%" : "100%"}>
                <Grid item xs={12} sm={12} md={12}>
                    <Header dashBoardSideNavToggle={dashBoardSideNavToggle}/>
                </Grid>
            
                <Grid item xs={12} sm={12} md={12} sx={{m:2}}>
                    {children} 
                </Grid>
            </Grid>
        </Grid>
        </ThemeProvider>
  );
}
