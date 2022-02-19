import classes from "./Logout.module.css";
import Modal from "../../../../UI/Modal/Modal";
import DelIcon from "../Elements/DelIcon";
import Button from "../../../../UI/Button/Button";
import GoogleIcon from "../Elements/GoogleIcon";
import { Heading186 } from "../../../../UI/Heading/Heading";

const Logout = () => {
  return (
    <Modal>
      <div className={classes.head}>
        <div>
          <DelIcon />
        </div>
      </div>
      <div className={classes.tail}>
        <div>
          <Heading186>Logout from useremail@gmail.com?</Heading186>
        </div>
        <div>
          <p className={classes.parah}>
            Do you really want logout from the system?
          </p>
        </div>
        <div className={classes.buttons}>
          <div>
            <Button className={classes.bluebutton}>No</Button>
          </div>
          <div>
            <Button className={classes.redbutton}>Yes</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Logout;
