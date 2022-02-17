import * as React from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import { Grid } from "@mui/material";

export default function CandidateLayout({ children }) {
  const [dashBoardSideNavOpen, setDashBoardSideNavOpen] = React.useState(true);

  const dashBoardSideNavToggle = () => {
    setDashBoardSideNavOpen(!dashBoardSideNavOpen);
  };

<<<<<<< HEAD
    return (
        <Grid container direction="row" style={{backgroundColor:"#EDEAEA"}}
            sx={{ backgroundColor: "#EDEAEA", height:"100vh" }}>
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
=======
  const dashBoardSideNavClose = () => {
    setDashBoardSideNavOpen(false);
  };

  return (
    <Grid
      container
      direction="row"
      sx={{
        backgroundColor: "#EDEAEA",
        height: "100vh",
      }}
    >
      <Grid item width="20%">
        <SideBar
          dashBoardSideNavOpen={dashBoardSideNavOpen}
          dashBoardSideNavToggle={dashBoardSideNavToggle}
          dashBoardSideNavClose={dashBoardSideNavClose}
        />
      </Grid>
      <Grid
        item
        container
        direction="row"
        width={dashBoardSideNavOpen ? "80%" : "100%"}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Header dashBoardSideNavToggle={dashBoardSideNavToggle} />
        </Grid>

        <Grid item xs={12} sm={12} md={12} sx={{ m: 2 }}>
          {children}
>>>>>>> 5d35b6d06b53c67d414edf0a4259e099ee2e1945
        </Grid>
      </Grid>
    </Grid>
  );
}
