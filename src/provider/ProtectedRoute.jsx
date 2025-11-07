import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <Loading />;

  if (!user) {
    if (!localStorage.getItem("redirectAfterLogin")) {
      const fullPath = location.pathname + (location.search || "");
      localStorage.setItem("redirectAfterLogin", fullPath);
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
