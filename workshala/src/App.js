import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Error from "./Pages/Error";
//import Profile from "./Pages/Profile";
import Statistics from "./Pages/Statistics";
import Jobs from "./Pages/Jobs";
import Applications from "./Pages/Applications";
import ApplyJob from "./Pages/ApplyJob";
import CompanyDetails from "./Pages/CompanyDetails";
import EditProfile from "./Pages/EditProfile";
import Parse from "parse/dist/parse.min.js";
import Routes from './Routes/Routs'

// Your Parse initialization configuration goes here
Parse.serverURL = "https://workshala.b4a.io";
Parse.initialize(
  "xxaq9UhFnMAzUPxVF4mjqmZQEouYPPVWoXNyRGaO",
  "pJnZfZWKjaSc47NgzwYqcmCJePajlRhlun6vVBJV",
  "mrCkTlPM9DlAw8VVD4xTNISdAxtVaCUt9tC1namP"
);

function App() {

  //
  return (
    /*  <div>
      <Users/>

    </div>
  */ 
    
  <BrowserRouter>
      <Routes />
        
    </BrowserRouter>
    


  );
}

// const mapStateToProps = (state) => {
//   console.log("testing mapstate: "+state);
//   return {

//   }
// }

export default App;
