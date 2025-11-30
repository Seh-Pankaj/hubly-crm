// RequireAuth.jsx
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const jwToken = useSelector((state) => state.authReducer.user.jwToken);

  if (!jwToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
