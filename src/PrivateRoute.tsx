import { Outlet, useLocation, Navigate } from "react-router-dom";
import { selectisLoggedIn } from "./redux/auth/selectors";
import { useAppSelector } from "./hooks/useAppSelector";
import { RouteProps } from "./PrivateRoute.types";

const PrivateRoute = ({ to }: RouteProps) => {
  const isLoggedIn = useAppSelector(selectisLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={to} state={{ from: location }} replace />
  );
};

export default PrivateRoute;
