import * as React from "react";

import { Route, Routes} from "react-router-dom";
import ContactUs from '../Pages/ContactUs';
import AboutUs from '../Pages/AboutUs';
import Blog from '../Pages/Blog';
import Home from '../Pages/Home';
import Error from '../Pages/Error';

export default function PublicRoutes({auth}) {

    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route exact path="/*" element={<Error />}  />
        </Routes>
      );
}