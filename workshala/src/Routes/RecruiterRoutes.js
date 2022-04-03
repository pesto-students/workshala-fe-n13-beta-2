import * as React from "react";

import { Route, Routes } from "react-router-dom";
import { isEmpty } from "../Utils/Generic";
import { Navigate } from "react-router-dom";

import ContactUs from "../Pages/ContactUs";
import Error from "../Pages/Error";
import AboutUs from "../Pages/AboutUs";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home/Index";

import Dashboard from "../Pages/Dashboard/Recruiter/Index";
import Profile from "../Pages/Profile/Recruiter/Index";
import EditProfile from "../Pages/Profile/Recruiter/EditProfile";
import ActiveJobs from "../Pages/Jobs/Recruiter/ActiveJobs/Index";
import Applications from "../Pages/Applications/Recruiter/Index";
import PostJob from "../Pages/Jobs/Recruiter/PostJob/Index";
import ApplicationAction from "../Pages/Applications/Recruiter/ApplicationAction";

import Statistics from "../Pages/Statistics/Candidate/Index";

export default function RecruiterRoutes({ auth }) {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          !isEmpty(auth.user) ? (
            <Navigate to="/recruiter/dashboard" replace={true} />
          ) : (
            <Home />
          )
        }
      />
      <Route exact path="/recruiter/dashboard" element={<Dashboard />} />
      <Route path="/recruiter/statistics" element={<Statistics />} />
      <Route path="/recruiter/postJob" element={<PostJob />} />
      <Route path="/recruiter/jobs" element={<ActiveJobs />} />
      <Route path="/recruiter/applications" element={<Applications />} />
      <Route path="/recruiter/profile" element={<Profile />} />
      <Route path="/recruiter/editProfile" element={<EditProfile />} />
      <Route
        path="/recruiter/applicationAction"
        element={<ApplicationAction />}
      />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}
