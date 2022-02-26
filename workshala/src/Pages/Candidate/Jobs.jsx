import React from "react";
import CandidateLayout from "../../Layouts/CandidateLayout";
import Job from "../../Components/Jobs/Candidate/Job";
import QuickView from "../../Components/Jobs/Candidate/CompanyQuickView";
import {
  Grid
} from "@mui/material";
export default function Jobs() {
  const [quickViewOpen, setQuickViewOpen] = React.useState(false);

  const quickViewToggle = () => {
    setQuickViewOpen(!quickViewOpen);
  };
    
  const quickViewClose = () => {
    setQuickViewOpen(false);
  };

  return (
    <CandidateLayout>
      <Grid container spacing={1}>
        <Grid item width={quickViewOpen ? "80%" : "100%"}>
          <Job  quickViewToggle={quickViewToggle}
                quickViewClose={quickViewClose}
                quickViewOpen={quickViewOpen}/>
          </Grid>
          {quickViewOpen ? 
          <Grid item width="20%">
            <QuickView/>
          </Grid> : <></>}
      </Grid>
    </CandidateLayout>
  );
}
