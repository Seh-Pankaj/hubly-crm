import { removeLogin } from "../redux/authReducer";
import useAuthContext from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove data from local storage
    localStorage.removeItem("jwToken");

    dispatch(removeLogin());
  };

  return { logout };
};
