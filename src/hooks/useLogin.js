import { useState } from "react";
import { apiPost } from "../api";
import { useDispatch } from "react-redux";
import { registerLogin } from "../redux/authReducer";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await apiPost("/user/login", { email, password });

      localStorage.setItem("user", JSON.stringify(response));
      dispatch(registerLogin(response));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setError(error.message);
      setTimeout(() => setError(null), 3000);
    }
  };
  return { error, login };
};
export default useLogin;
