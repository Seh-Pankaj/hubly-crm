import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="logo.png" alt="Logo" />

      <div className="btns-cont">
        <a href="/login" className="login-btn">
          Login
        </a>
        <a href="/signup" className="signup-btn">
          Signup
        </a>
      </div>
    </div>
  );
};
export default Navbar;
