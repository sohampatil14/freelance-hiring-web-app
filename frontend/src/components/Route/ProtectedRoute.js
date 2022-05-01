import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("user");

  return isAuthenticated ? <Outlet /> : <Navigate to='/signup' />;
}

export default ProtectedRoute;
