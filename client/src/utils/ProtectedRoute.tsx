import React, { ReactNode } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const logged = localStorage.getItem("logged");

  // If don't authenticate, retrun Login Page
  if (logged !== "true") {
    return <Navigate to={"/"} replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
