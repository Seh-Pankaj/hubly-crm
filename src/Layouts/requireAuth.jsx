// RequireAuth.jsx
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { fetchMe } from "../redux/authSlice";

const RequireAuth = ({ allowedRoles }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch, location.pathname]);

  const { user, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <div>Checking authentication...</div>;
  }

  // No user → invalid/missing JWT → redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Role check
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorised" replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
