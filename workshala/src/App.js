import * as React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Error from './Pages/Error'
import Profile from './Pages/Profile'
import Statistics from "./Pages/Statistics";
import Jobs from "./Pages/Jobs";
import Applications from "./Pages/Applications";
import ApplyJob from "./Pages/ApplyJob";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Applications" element={<Applications />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ApplyJOb" element={<ApplyJob />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
