import React, { Component } from "react";
import CandidateLayout from "../Layouts/CandidateLayout";
import Job from "../Components/Jobs/Job";
import ProfileInfo from "../Components/Dashboard/ProfileInfo";
import Application from "../Components/Applications/Application";
import {
  Button,
  Grid,
  Divider,
  Switch,
  Typography,
  TextField,
  Paper,
} from "@mui/material";
export default function Applications() {
  return (
    <CandidateLayout>
      <Application />
    </CandidateLayout>
  );
}
