import classes from "./LinkCopiedPopUp.module.css";
import Modal from "../../../UI/Modal/Modal";
import { Heading186 } from "../../../UI/Heading/Heading";

const Runtest = (props) => {
  return (
    <div className={classes.center}>
      <div className={classes.modal}>
        <div className={classes.content}>
          <Heading186 className={classes.heading2}>Link is Copied</Heading186>
        </div>
      </div>
    </div>
  );
};

export default Runtest;
