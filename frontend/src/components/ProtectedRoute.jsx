// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../components/Login/firebaseConfig";

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser;

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
