import * as React from "react";

import { Route, Routes} from "react-router-dom";
import {isEmpty} from '../Services/Utils/Generic';
import {Navigate} from "react-router-dom";

import ContactUs from '../Pages/Common/ContactUs';
import Error from '../Pages/Common/Error';
import AboutUs from '../Pages/Common/AboutUs';
import Blog from '../Pages/Common/Blog';
import Home from '../Pages/Common/Home';

import Dashboard from '../Pages/Recruiter/Dashboard';
import Profile from '../Pages/Recruiter/Profile';
import EditProfile from '../Pages/Recruiter/EditProfile';
import ActiveJobs from '../Pages/Recruiter/ActiveJobs';
import Applications from '../Pages/Recruiter/Applications';

import Statistics from '../Pages/Candidate/Statistics';
import ApplyJob from '../Pages/Candidate/ApplyJob';

import CompanyDetails from '../Pages/Candidate/CompanyDetails';

export default function RecruiterRoutes({auth}) {

    return (
      <Routes>
      <Route exact path="/" element={
                       !isEmpty(auth.user) ? (
                      <Navigate to="/recruiter/dashboard" replace={true} /> ) :
                      <Home/>
                      }/>    
      <Route exact path="/recruiter/dashboard" element={<Dashboard />} />
      <Route path="/recruiter/statistics" element={<Statistics />} />
      <Route path="/recruiter/applyJob" element={<ApplyJob />} />
      <Route path="/recruiter/jobs" element={<ActiveJobs />} />
      <Route path="/recruiter/applications" element={<Applications />} />
      <Route path="/recruiter/companyDetails" element={<CompanyDetails />} />
      <Route path="/recruiter/profile" element={<Profile />} />
      <Route path="/recruiter/editProfile" element={<EditProfile />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/*" element={<Error />} />
      </Routes>
      );
}