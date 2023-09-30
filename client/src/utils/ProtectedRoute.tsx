import React, { ReactNode } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, access_token } = React.useContext(AuthContext);
  const location = useLocation();

  if (Object.keys(user).length === 0 && !access_token) {
    return <Navigate to={"/"} state={{ from: location }} replace />;
  }
  console.log(!access_token);
  return children;
};

export default ProtectedRoute;
