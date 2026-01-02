import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
        <button style={styles.btn} onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
};

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    minWidh: "300px",
  },
  btn: {
    marginTop: "20px",
  },
};

export default Modal;
