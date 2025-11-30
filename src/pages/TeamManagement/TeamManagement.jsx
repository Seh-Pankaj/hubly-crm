import { useState } from "react";
import "./TeamManagement.css";
import AddTeamMate from "./AddTeamMate.jsx";
import DeleteConfirmModal from "./DeleteConfirmModal.jsx";
import {} from "react-redux";
import { useEffect } from "react";
import { apiGet } from "../../api.js";

const TeamManagement = () => {
  const [teamMates, setTeamMates] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  const [openDelete, setOpenDelete] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const getTeamMates = async () => {
      try {
        const res = await apiGet("/get-team-mates");
        setTeamMates(res.users);
      } catch (error) {
        console.log(error);
      }
    };

    getTeamMates();
  });

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
              {teamMates.map((member, index) => (
                <tr key={member._id} className="team-row">
                  <td>
                    <img
                      src={`user-${((index + 3) % 5) + 1}.png`}
                      alt={member.name}
                      className="team-avatar"
                    />
                  </td>
                  <td>{member.firstName + " " + member.lastName}</td>
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
                            userId={member._id}
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
        onSave={() => {
          setShowAdd(false);
        }}
      />
    </div>
  );
};
export default TeamManagement;
