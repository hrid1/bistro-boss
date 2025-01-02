import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spiner from "../components/Spiner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  console.log(location)

  if (loading) {
    return <Spiner />;
  }
  if (!user) {
    return <Navigate state={location?.pathname} to="/login" />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
