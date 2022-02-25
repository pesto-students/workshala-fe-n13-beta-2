import * as React from "react";

import { Route, Routes} from "react-router-dom";
import {isEmpty} from '../Services/Utils/Generic';
import ContactUs from '../Pages/Common/ContactUs';
import AboutUs from '../Pages/Common/AboutUs';
import Blog from '../Pages/Common/Blog';
import Home from '../Pages/Common/Home';
import Dashboard from '../Pages/Candidate/Dashboard';
import Error from '../Pages/Common/Error';

export default function RecruiterRoutes({auth}) {

    return (
        <Routes>
            
          {!isEmpty(auth.user) ? (
            <Route exact path="/recruiter/dashboard" element={<Dashboard />} />
          ) : (
            <Route exact path="/" element={<Home />} />
          )}
          <Route exact path="/recruiter/dashboard" element={<Dashboard />} />
          <Route path="/contactUs" element={<ContactUs />} />                     
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/*" element={<Error/>} />
        </Routes>
      );
}