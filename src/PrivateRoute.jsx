import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectisLoggedIn } from "./redux/auth/selectors";

const PrivateRoute = ({ to }) => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={to} state={{ from: location }} replace />
  );
};

export default PrivateRoute;
