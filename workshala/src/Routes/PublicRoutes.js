import * as React from "react";

import { Route, Routes} from "react-router-dom";
import ContactUs from '../Pages/Common/ContactUs';
import AboutUs from '../Pages/Common/AboutUs';
import Blog from '../Pages/Common/Blog';
import Home from '../Pages/Common/Home';
import Error from '../Pages/Common/Error';

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