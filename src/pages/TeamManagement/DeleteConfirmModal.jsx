import { apiPost } from "../../api";
import "./DeleteConfirmModal.css";

const DeleteConfirmModal = ({ open, onClose, onConfirm, userId }) => {
  if (!open) return null;

  const deleteUser = async () => {
    try {
      await apiPost("/user/delete-user", { userId });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="delete-modal-overlay" onClick={onClose}>
      <div className="delete-modal-box" onClick={(e) => e.stopPropagation()}>
        <p className="delete-msg">This teammate will be deleted.</p>

        <div className="delete-btn-row">
          <button className="delete-btn cancel-del" onClick={onClose}>
            Cancel
          </button>
          <button
            className="delete-btn confirm-del"
            onClick={() => {
              deleteUser();
              onConfirm();
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
