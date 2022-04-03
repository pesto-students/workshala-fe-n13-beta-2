import * as React from "react";
import { isEmpty } from "../Utils/Generic";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Utils/Loader";
import CandidateRoutes from "./CandidateRoutes";
import RecruiterRoutes from "./RecruiterRoutes";
import PublicRoutes from "./PublicRoutes";
import getCurrentUser from "../redux/actions/currentUser";

export default function RoutesMain() {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.user);

  const { user, loading } = auth;
  if (loading) {
    return <Loader />;
  } else if (!isEmpty(user)) {
    if (user.data.role === "candidate") {
      return <CandidateRoutes auth={auth} />;
    } else {
      return <RecruiterRoutes auth={auth} />;
    }
  } else {
    if (localStorage.getItem("persist:root") == null) {
      return <PublicRoutes />;
    }
    const token = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).user
    ).data;
    if (token !== undefined && !isEmpty(token.sessionToken)) {
      dispatch(getCurrentUser(token), []); //userme
      return <Loader />;
    } else {
      return <PublicRoutes />;
    }
  }
}
