import React, { Component } from "react";
import CandidateLayout from "../Layouts/CandidateLayout";
import Job from "../Components/Job";
import ProfileInfo from "../Dashboard/ProfileInfo";
import Application from "../Components/Application";
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
