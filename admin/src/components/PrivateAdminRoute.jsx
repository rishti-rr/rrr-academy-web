import React from "react";
import { Navigate } from "react-router-dom";

const PrivateAdminRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
//    return token ? children : <Navigate to="/login" />;
//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;

//   return token === "dummy-admin-token" ? children : <Navigate to="/login" replace />;
  if (!token || token !== "dummy-admin-token") {
    return <Navigate to="/login" />;
  }

  return children;

};

export default PrivateAdminRoute;
