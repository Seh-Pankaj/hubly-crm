import { useState } from "react";
import "./AddTeamMate.css";

const AddTeamMate = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    designation: "Member",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave && onSave(formData);
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
            <label htmlFor="username" className="add-team-label">
              User name
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className="add-team-input"
              placeholder="User name"
              value={formData.username}
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
            <label htmlFor="designation" className="add-team-label">
              Designation
            </label>
            <select
              id="designation"
              name="designation"
              className="add-team-select"
              value={formData.designation}
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
