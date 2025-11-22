import { Outlet, useNavigate } from "react-router-dom";
import "./AuthLayout.css";

const AuthLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-page">
      <div className="auth-main">
        <div className="logo">
          <img src="logo.png" alt="logo" onClick={() => navigate("/")} />
        </div>
        <Outlet />
        <p className="text">
          This site is protected by reCAPTCHA and the{" "}
          <u>Google Privacy Policy</u> and
          <u>Terms of Service</u> apply.
        </p>
        {/* signup or login componenet depending upon /signup or /login */}
      </div>
      <div className="photo-cont">
        <img src="photo.png" alt="Decorative-photo" className="photo" />
      </div>
    </div>
  );
};
export default AuthLayout;
