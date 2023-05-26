import React from "react";
import { useContext } from "react";
import { UserContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/shared/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center position-fixed bg-light vh-100 vw-100 top-0">
        <Loader></Loader>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivateRoute;
