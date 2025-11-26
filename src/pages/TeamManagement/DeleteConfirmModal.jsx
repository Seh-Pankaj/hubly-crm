import "./DeleteConfirmModal.css";

const DeleteConfirmModal = ({ open, onClose, onConfirm }) => {
  if (!open) return null;

  return (
    <div className="delete-modal-overlay" onClick={onClose}>
      <div className="delete-modal-box" onClick={(e) => e.stopPropagation()}>
        <p className="delete-msg">This teammate will be deleted.</p>

        <div className="delete-btn-row">
          <button className="delete-btn cancel-del" onClick={onClose}>
            Cancel
          </button>
          <button className="delete-btn confirm-del" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
