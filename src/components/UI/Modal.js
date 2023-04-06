import { Fragment } from "react";
import { createPortal } from "react-dom";
import Backdrop from "./loader";
const Modal = ({ onClose, children }) => {
  return (
    <Fragment>
      {createPortal(
        <>
          <Backdrop OnClose={onClose} />
          <div className="modal">
            <div className="content"> {children}</div>
            <button type="close" onClick={onClose}>
              X
            </button>
          </div>
        </>,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default Modal;
