import React from "react";
import CandidateLayout from "../../Layouts/CandidateLayout";
import ActiveJob from "../../Components/Jobs/ActiveJob";
import QuickView from "../../Components/Jobs/CompanyQuickView";
import { Grid } from "@mui/material";

export default function ActiveJobs() {
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
        <ActiveJob />
      </Grid>
    </CandidateLayout>
  );
}
