import * as React from "react";

import { Route, Routes } from "react-router-dom";
import { isEmpty } from "../Services/Utils/Generic";
import Statistics from "../Pages/Candidate/Statistics";
import ApplyJob from "../Pages/Candidate/ApplyJob";
import Jobs from "../Pages/Candidate/Jobs";
import Applications from "../Pages/Candidate/Applications";
import CompanyDetails from "../Pages/Candidate/CompanyDetails";
import ContactUs from "../Pages/Common/ContactUs";
import AboutUs from "../Pages/Common/AboutUs";
import Blog from "../Pages/Common/Blog";
import Home from "../Pages/Common/Home";
import Dashboard from "../Pages/Candidate/Dashboard";
import Error from "../Pages/Common/Error";
import Profile from "../Pages/Candidate/Profile";
import EditProfile from "../Pages/Candidate/EditProfile";
import { Navigate } from "react-router-dom";

export default function CandidateRoutes({ auth }) {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          !isEmpty(auth.user) ? (
            // <Navigate to="/candidate/dashboard" replace={true} />
            <Home />
          ) : (
            <Home />
          )
        }
      />
      <Route exact path="/candidate/dashboard" element={<Dashboard />} />
      <Route path="/candidate/statistics" element={<Statistics />} />
      <Route path="/candidate/applyJob" element={<ApplyJob />} />
      <Route path="/candidate/jobs" element={<Jobs />} />
      <Route path="/candidate/applications" element={<Applications />} />
      <Route path="/candidate/companyDetails" element={<CompanyDetails />} />
      <Route path="/candidate/profile" element={<Profile />} />
      <Route path="/candidate/editProfile" element={<EditProfile />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}
