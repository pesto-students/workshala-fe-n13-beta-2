import * as React from "react";
import { isEmpty } from "../Services/Utils/Generic";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Error from "../Pages/Error";
import Loader from "../Services/Utils/Loader";
import Statistics from "../Pages/Statistics";
import ApplyJob from "../Pages/ApplyJob";
import Jobs from "../Pages/Jobs";
import Applications from "../Pages/Applications";
import CompanyDetails from "../Pages/CompanyDetails";
import EditProfile from "../Pages/EditProfile";
import getCurrentUser from "../redux/actions/currentUser";
import PostJob from "../Pages/PostJob";
import ActiveJobs from "../Pages/ActiveJobs";
import RecruiterApp from "../Pages/RecruiterApp";

const CandidateRoutes = ({ auth }) => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={!isEmpty(auth.user) ? <Dashboard /> : <Home />}
      />
      <Route exact path="/Home" element={<Home />} />
      <Route exact path="/Dashboard" element={<Dashboard />} />
      <Route path="/Statistics" element={<Statistics />} />
      <Route path="/ApplyJob" element={<ApplyJob />} />
      <Route path="/Jobs" element={<Jobs />} />
      <Route path="/Applications" element={<Applications />} />
      <Route path="/CompanyDetails" element={<CompanyDetails />} />
      <Route path="/EditProfile" element={<EditProfile />} />

      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

const RecruiterRoutes = ({ auth }) => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={!isEmpty(auth.user) ? <Dashboard /> : <Home />}
      />
      <Route exact path="/Recruiter/Dashboard" element={<Dashboard />} />
      {/* Other Routes comes here */}
      <Route path="/PostJob" element={<PostJob />} />
      <Route path="/ActiveJobs" element={<ActiveJobs />} />
      <Route path="/RecruiterApp" element={<RecruiterApp />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

const PublicRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ActiveJobs />} />
      <Route exact path="/ApplyJob" element={<ApplyJob />} /> //TODO remove this
      <Route exact path="/Dashboard" element={<Dashboard />} /> //TODO remove
      this
      <Route path="/Jobs" element={<Jobs />} /> //TODO remove this
      <Route path="/Applications" element={<Applications />} /> //TODO remove
      this
      <Route path="/CompanyDetails" element={<CompanyDetails />} /> //TODO
      remove this
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default function Routs() {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.user); //user

  const { user, loading } = auth; //
  if (loading) {
    return <Loader />;
  } else if (!isEmpty(user)) {
    if (user.data.role === "candidate") {
      return <CandidateRoutes auth={auth} />;
    } else {
      return <RecruiterRoutes auth={auth} />;
    }
  } else {
    return <PublicRoutes />;
  }
  // else {
  //   const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).data;
  //   console.log(token);
  //   if (token != undefined && isEmpty(token.sessionToken)) {
  //     return <PublicRoutes />;
  //   } else {
  //     dispatch(getCurrentUser(token), []);             //userme
  //     return <Loader/>;
  //   }
  // }
}
