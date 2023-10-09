import classes from "./Modal.module.css";
import {Fragment} from "react";

const Backdrop = (props) => {

    return (
        <div className={classes.backdrop} onClick={props.onHideCart}></div>
    );
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>{props.children}</div>
    );
};

const Modal = (props) => {
    const portalElement = document.getElementById("overlays");

    return (<Fragment>
        ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalElement)
        ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)
    </Fragment>
    );
};

export default Modal;