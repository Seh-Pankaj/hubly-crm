import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useLogin();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login(email, password);
      }}
      className="login-form"
    >
      <div className="title">Sign in to your Plexify</div>
      <label htmlFor="user-email">Email</label>

      <input
        value={email}
        type="email"
        name="email"
        id="user-email"
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <label htmlFor="password">Password</label>

      <input
        value={password}
        type="password"
        name="password"
        id="password"
        required
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {error && <div className="error">{error}</div>}

      <button type="submit" className="login-btn">
        Log in
      </button>

      <div className="signup-text">
        Don't have an account?{" "}
        <span id="signup-link" onClick={() => navigate("/signup")}>
          Sign up
        </span>
      </div>
    </form>
  );
};
export default Login;
