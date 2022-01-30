//import HomePage from "./Home/HomePage";
import * as React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Error from "./Pages/Error";
import Profile from "./Profile/Profile";
import Jobs from "./Pages/Jobs";
import Applications from "./Pages/Applications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Jobs />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Home" element={<Home />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
