import classes from "./ConnectionUpdate.module.css";
import Modal from "../../../../UI/Modal/Modal";
import { Heading186 } from "../../../../UI/Heading/Heading";

const ConnectionUpdate = (props) => {
  return (
    <Modal modalClass={classes.modal} backdropClass={classes.backdropClass}>
      <Heading186>Connection Successfull</Heading186>
    </Modal>
  );
};

export default ConnectionUpdate;
