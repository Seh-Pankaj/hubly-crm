import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/authSlice";

const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  return { logout };
};

export default useLogout;
