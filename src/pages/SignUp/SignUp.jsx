import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="signup-form">
      <div className="title-cont">
        <div className="title">Create an account</div>
        <span onClick={() => navigate("/login")}>Sign in instead</span>
      </div>

      <label htmlFor="first-name">First Name</label>
      <br />
      <input type="text" name="first-name" id="first-name" />
      <br />
      <label htmlFor="last-name">Last Name</label>
      <br />
      <input type="text" name="last-name" id="last-name" />
      <br />
      <label htmlFor="email">Email</label>
      <br />
      <input type="email" name="email" id="email" />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" name="password" id="password" />
      <br />
      <label htmlFor="confirm">Confirm Password</label>
      <br />
      <input type="confirm" name="confirm" id="confirm" />
      <br />
      <input type="checkbox" name="policy" id="policy" />
      <span>
        By creating an account, I agree to our <u>Terms of use</u> and{" "}
        <u>Privacy Policy</u>
      </span>
      <div className="signup-btn" title="Only admin can sign up team members">
        Create an account
      </div>
    </div>
  );
};
export default SignUp;
