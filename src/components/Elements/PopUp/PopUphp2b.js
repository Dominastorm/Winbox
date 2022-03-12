import classes from "./PopUphp2b.module.css";
import Modal from "../../UI/Modal/Modal";
import DelIcon from "../../Icons/DelIcon";
import BlueButton from "../../UI/BlueButton/Button";
import RedButton from "../../UI/RedButton/Button";
import { Heading186 } from "../../UI/Heading/Heading";

const Logout = (props) => {
  return (
    <Modal modalClass={classes.modalClass}>
      <div className={classes.head}>
        <div>
          <DelIcon />
        </div>
      </div>
      <div className={classes.tail}>
        <div>
          <Heading186 className={classes.heading}>{props.heading}</Heading186>
        </div>
        <div>
          <p className={classes.parah}>{props.parah}</p>
        </div>
        <div className={classes.buttons}>
          <div>
            <BlueButton className={classes.bluebutton}>No</BlueButton>
          </div>
          <div>
            <RedButton className={classes.redbutton}>Yes</RedButton>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Logout;
