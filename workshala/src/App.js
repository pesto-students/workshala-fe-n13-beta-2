import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Error from "./Pages/Error";
//import Profile from "./Pages/Profile";
import Statistics from "./Pages/Statistics";
import Jobs from "./Pages/Jobs";
import Applications from "./Pages/Applications";
import RecruiterApplication from "./Pages/RecruiterApp";
import ActiveJobs from "./Pages/ActiveJobs";
import ApplyJob from "./Pages/ApplyJob";
import CompanyDetails from "./Pages/CompanyDetails";
import EditProfile from "./Pages/EditProfile";
import Parse from "parse/dist/parse.min.js";

import PostJob from "./Pages/PostJob";

// Your Parse initialization configuration goes here
Parse.serverURL = "https://parseapi.back4app.com";
Parse.initialize(
  "BxnHmCjdT1tQTZBT1OIaZuiMSJkcGMVj8oAPfhEf",
  "Ktz3IYrX9NI0YpqGnfYjNkUVQGuVZUtVa5Ve6DsK"
);

function App() {
  //
  return (
    /*  <div>
      <Users/>

    </div>
  */

    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/ApplyJOb" element={<ApplyJob />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Applications" element={<Applications />} />
        <Route path="/CompanyDetails" element={<CompanyDetails />} />
        <Route path="/PostJob" element={<PostJob />} />
        <Route path="/RecruiterApp" element={<RecruiterApplication />} />
        <Route path="/ActiveJobs" element={<ActiveJobs />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

// const mapStateToProps = (state) => {
//   console.log("testing mapstate: "+state);
//   return {

//   }
// }

export default App;
