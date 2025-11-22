import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-form">
      <div className="title">Sign in to your Plexify</div>
      <label htmlFor="user-name">Username</label>

      <input type="text" name="user-name" id="user-name" />

      <label htmlFor="password">Password</label>

      <input type="password" name="password" id="password" />

      <div className="login-btn">Log in</div>

      <div className="signup-text">
        Don't have an account?{" "}
        <span id="signup-link" onClick={() => navigate("/signup")}>
          Sign up
        </span>
      </div>
    </div>
  );
};
export default Login;
