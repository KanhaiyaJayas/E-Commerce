import { Children, Fragment } from "react";
import { createPortal } from "react-dom";
import  Backdrop  from "./loader";
const Modal = ({onClose}) => {
    return (
        <Fragment>
            {
                createPortal(
                    <>
                    <Backdrop OnClose={onClose}/>
                    <div className="modal">
                        <button onClick={onClose
                        }>X</button>
                        <div className="content"> {Children}</div>
                    </div>
                    </>,
                    document.getElementById('modal-root')
                )
            }
        </Fragment>
    )
}

export default Modal;