import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
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
import Routes from "./Routes/Routs";

import PostJob from "./Pages/PostJob";

// Your Parse initialization configuration goes here

//Parse.serverURL = "https://workshala.b4a.io";

Parse.serverURL = "https://parseapi.back4app.com";
Parse.initialize(
  "BxnHmCjdT1tQTZBT1OIaZuiMSJkcGMVj8oAPfhEf",
  "Ktz3IYrX9NI0YpqGnfYjNkUVQGuVZUtVa5Ve6DsK"
);

function App() {
  //
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
