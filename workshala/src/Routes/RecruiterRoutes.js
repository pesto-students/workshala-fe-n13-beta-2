import * as React from "react";

import { Route, Routes} from "react-router-dom";
import {isEmpty} from '../Services/Utils/Generic';
import ContactUs from '../Pages/ContactUs';
import AboutUs from '../Pages/AboutUs';
import Blog from '../Pages/Blog';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import Error from '../Pages/Error';

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
          <Route path="/*" element={<Error/>} />
        </Routes>
      );
}