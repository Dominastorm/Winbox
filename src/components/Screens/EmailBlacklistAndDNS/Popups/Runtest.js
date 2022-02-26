import classes from "./Runtest.module.css";
import DeleteIcon from "../../../Icons/DelIcon";
import Modal from "../../../UI/Modal/Modal";
import Button from "../../../UI/Button/Button";
import BlueButton from "../../../UI/BlueButton/Button";
import { Heading186 } from "../../../UI/Heading/Heading";

const Runtest = () => {
  return (
    <Modal>
      <div className={classes.flexend}>
        <div>
          <DeleteIcon />
        </div>
      </div>
      <div className={classes.flexcenter}>
        <div>
          <Heading186>
            Send an email to the address below, from the email you want to test
          </Heading186>
        </div>
      </div>
      <div className={classes.flexcenterrow}>
        <div className={classes.divwidth}>
          <input className={classes.input} placeholder="email4832ddsfsdxkekxslksdk@test-stage"/>
        </div>
        <div className={classes.btndiv}>
          <button className={classes.button}>Copy</button>
        </div>
      </div>
      <div className={classes.flexcenterrow}>
        <div>
          <BlueButton>Close</BlueButton>
        </div>
        <div className={classes.whitespace}></div>
        <div>
          <Button>Next</Button>
        </div>
      </div>
    </Modal>
  );
};

export default Runtest;
