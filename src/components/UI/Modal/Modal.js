import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={`${classes.backdrop} ${props.backdropClass}`} onClick={props.onClick} value={props.value}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.center}>
      <div className={`${classes.modal} ${props.modalClass}`}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onClick} value={props.value} backdropClass={props.backdropClass}/>,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay modalClass={props.modalClass}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
export default Modal;
