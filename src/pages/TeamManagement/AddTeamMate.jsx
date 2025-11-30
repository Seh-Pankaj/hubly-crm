import { useState } from "react";
import "./AddTeamMate.css";
import { apiPost } from "../../api";

const AddTeamMate = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    role: "Member",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addTeamMember = async () => {
    try {
      await apiPost("/user/signup", { ...formData, password: formData.email });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave && onSave(formData);
    addTeamMember();
  };

  return (
    <div className="add-team-overlay" onClick={onClose}>
      <div className="add-team-modal" onClick={(e) => e.stopPropagation()}>
        <div className="add-team-header">
          <div className="add-team-title">Add Team members</div>
          <div className="add-team-subtitle">
            Talk with colleagues in a group chat. Messages in this group are
            only visible to its participants. New teammates may only be invited
            by the administrators.
          </div>
        </div>

        <form className="add-team-form" onSubmit={handleSubmit}>
          <div className="add-team-field">
            <label htmlFor="firstName" className="add-team-label">
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="add-team-input"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="add-team-field">
            <label htmlFor="lastName" className="add-team-label">
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="add-team-input"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="add-team-field">
            <label htmlFor="email" className="add-team-label">
              Email ID
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="add-team-input"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="add-team-field">
            <label htmlFor="phone" className="add-team-label">
              User name
            </label>
            <input
              id="phone"
              pattern="^.{10,}$"
              name="phone"
              type="text"
              className="add-team-input"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                handleChange();
              }}
            />
          </div>

          <div className="add-team-field">
            <label htmlFor="role" className="add-team-label">
              Role
            </label>
            <select
              id="role"
              name="role"
              className="add-team-select"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="Member">Member</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="add-team-footer">
            <button
              type="button"
              className="save-team-btn cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="save-team-btn save-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeamMate;
