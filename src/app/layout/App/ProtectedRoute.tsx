import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
  user?: boolean;
}

export const ProtectedRoute = ({ children, user }: ProtectedRouteProps) =>
  user ? children : <Navigate to="/login" />;
