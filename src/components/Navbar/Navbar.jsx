import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img src="logo.png" alt="Logo" />
      <div className="btns-cont">
        <span className="login-btn" onClick={() => navigate("/login")}>
          Login
        </span>
        <span className="signup-btn" onClick={() => navigate("/signup")}>
          Signup
        </span>
      </div>
    </div>
  );
};
export default Navbar;
