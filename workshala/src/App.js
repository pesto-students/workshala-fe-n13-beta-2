//import HomePage from "./Home/HomePage";
import * as React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Error from './Pages/Error'
import Profile from './Pages/Profile'
import Statistics from "./Pages/Statistics";
import ApplyJob from "./Pages/ApplyJob";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ApplyJOb" element={<ApplyJob />} />
        <Route path="*" element={<Error />} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
