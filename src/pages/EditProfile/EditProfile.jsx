import { useState } from "react";
import "./EditProfile.css";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "Sarthak",
    lastName: "Pal",
    email: "Sarthakpal08@gmail.com",
    password: "************",
    confirmPassword: "************",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="settings-cont">
      <div className="settings-heading">Settings</div>
      <div className="profile-card">
        <div className="profile-tabs">
          <div className="profile-tab">Edit Profile</div>
        </div>
        <div className="profile-separator" />
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="firstName" className="field-label">
              First name
            </label>
            <div className="field-group">
              <input
                id="firstName"
                name="firstName"
                className="field-input"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="lastName" className="field-label">
              Last name
            </label>
            <div className="field-group">
              <input
                id="lastName"
                name="lastName"
                className="field-input"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <div className="field-group">
              <input
                id="email"
                name="email"
                className="field-input"
                value={formData.email}
                onChange={handleChange}
              />

              <div className="info-holder">
                <div className="info-wrapper">
                  <span className="info-icon">i</span>
                  <div className="info-tooltip">
                    cannot contain specail characters
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="password" className="field-label">
              Password
            </label>
            <div className="field-group">
              <input
                id="password"
                name="password"
                type="password"
                className="field-input"
                value={formData.password}
                onChange={handleChange}
              />

              <div className="info-holder">
                <div className="info-wrapper">
                  <span className="info-icon">i</span>
                  <div className="info-tooltip">
                    cannot contain specail characters
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="confirmPassword" className="field-label">
              Confirm Password
            </label>
            <div className="field-group">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="field-input"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <div className="info-holder">
                <div className="info-wrapper">
                  <span className="info-icon">i</span>
                  <div className="info-tooltip">
                    User will logged out immediately
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-actions">
            <button type="submit" className="profile-save-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
