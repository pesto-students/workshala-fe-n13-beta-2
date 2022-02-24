import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Parse from "parse/dist/parse.min.js";
import RoutesMain from './Routes/RoutesMain'

// Your Parse initialization configuration goes here

//Parse.serverURL = "https://workshala.b4a.io";

Parse.serverURL = "https://parseapi.back4app.com";
Parse.initialize(
  "BxnHmCjdT1tQTZBT1OIaZuiMSJkcGMVj8oAPfhEf",
  "Ktz3IYrX9NI0YpqGnfYjNkUVQGuVZUtVa5Ve6DsK"
);

function App() {
  return (
    
    <BrowserRouter>
      <RoutesMain />
    </BrowserRouter>
  );
}

export default App;
