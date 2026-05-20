import { useState } from "react";
import { apiPost } from "../api";
import { useDispatch } from "react-redux";
import { registerLogin } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await apiPost("/user/login", { email, password });
      dispatch(registerLogin(response));
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(null), 3000);
    }
  };
  return { error, login };
};
export default useLogin;
