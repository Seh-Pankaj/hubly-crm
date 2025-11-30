import { useState } from "react";
import "./TeamManagement.css";
import AddTeamMate from "./AddTeamMate";
import DeleteConfirmModal from "./DeleteConfirmModal";

const teamMembers = [
  {
    id: 1,
    name: "Joe Doe",
    phone: "+1 (000) 000-0000",
    email: "example@gmail.com",
    role: "Admin",
    avatar: "user-1.png",
  },
  {
    id: 2,
    name: "Joe Doe",
    phone: "+1 (000) 000-0000",
    email: "example@gmail.com",
    role: "Member",
    avatar: "user-2.png",
  },
  {
    id: 3,
    name: "Joe Doe",
    phone: "+1 (000) 000-0000",
    email: "example@gmail.com",
    role: "Member",
    avatar: "user-3.png",
  },
  {
    id: 4,
    name: "Joe Doe",
    phone: "+1 (000) 000-0000",
    email: "example@gmail.com",
    role: "Member",
    avatar: "user-4.png",
  },
];

const TeamManagement = () => {
  const [showAdd, setShowAdd] = useState(false);

  const [openDelete, setOpenDelete] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleDeleteClick = (index) => {
    setOpenDelete(true);
    setSelectedIndex(index);
  };

  const confirmDelete = () => {
    setOpenDelete(false);
  };

  return (
    <div className="teams-page">
      <div className="teams-heading">Team</div>
      <div className="team-cont">
        <div className="team-table-cont">
          <table className="team-table">
            <thead>
              <tr>
                <th></th>
                <th className="team-th-fullname">
                  <span>Full Name</span>
                  <img
                    src="sort.png"
                    alt="sort-icon"
                    className="team-sort-icon"
                  />
                </th>
                <th>Phone</th>
                <th>Email</th>
                <th>Role</th>
                <th className="team-actions-th"></th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member, index) => (
                <tr key={member.id} className="team-row">
                  <td>
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="team-avatar"
                    />
                  </td>
                  <td>{member.name}</td>
                  <td>{member.phone}</td>
                  <td>{member.email}</td>
                  <td>{member.role}</td>
                  <td>
                    {index != 0 && (
                      <div className="team-actions-cont">
                        <button className="team-icon-btn">
                          <img src="edit-team.png" alt="edit" />
                        </button>
                        <button
                          className="team-icon-btn"
                          onClick={() => handleDeleteClick(index)}
                        >
                          <img src="delete-team.png" alt="delete" />
                        </button>
                        {selectedIndex == index && (
                          <DeleteConfirmModal
                            open={openDelete}
                            onClose={() => setOpenDelete(false)}
                            onConfirm={confirmDelete}
                          />
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="team-footer">
            <button onClick={() => setShowAdd(true)} className="add-team-btn">
              <span className="add-team-plus">
                <img src="add.png" alt="add-icon" />
              </span>
              <span>Add Team members</span>
            </button>
          </div>
        </div>
      </div>
      <AddTeamMate
        isOpen={showAdd}
        onClose={() => setShowAdd(false)}
        onSave={(data) => {
          setShowAdd(false);
        }}
      />
    </div>
  );
};
export default TeamManagement;
