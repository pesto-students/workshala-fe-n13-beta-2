import * as React from "react";

import { Route, Routes} from "react-router-dom";
import {isEmpty} from '../Services/Utils/Generic';
import Statistics from '../Pages/Statistics';
import ApplyJob from '../Pages/ApplyJob';
import Jobs from '../Pages/Jobs';
import Applications from '../Pages/Applications';
import CompanyDetails from '../Pages/CompanyDetails';
import ContactUs from '../Pages/ContactUs';
import AboutUs from '../Pages/AboutUs';
import Blog from '../Pages/Blog';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import Error from '../Pages/Error';
import Profile from '../Pages/Profile';
import EditProfile from '../Pages/EditProfile';
import {useNavigate, Navigate} from "react-router-dom";

export default function CandidateRoutes({auth}) {
    
    return (
        <Routes>
        <Route exact path="/" element={
                         !isEmpty(auth.user) ? (
                        <Navigate to="/candidate/dashboard" replace={true} /> ) :
                        <Home/>
                        }/>    
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