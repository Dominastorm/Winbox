import classes from "./Runtest.module.css";
import DeleteIcon from "../../../Icons/DelIcon";
import Modal from "../../../UI/Modal/Modal";
import Button from "../../../UI/Button/Button";
import BlueButton from "../../../UI/BlueButton/Button";
import { Heading186 } from "../../../UI/Heading/Heading";

const Runtest = (props) => {
  let copytext ="email4832ddsfsdxkekxslksdk@test-stage";

  const copyToClipboard = (event) => {
    navigator.clipboard.writeText(event.currentTarget.value);
  }

  const hidePopUP = () => {
    props.close.renderPopUp(0);
  };

  return (
    <Modal onClick={props.close.function} value={props.close.value}>
      <div className={classes.flexend}>
        <div>
          <DeleteIcon
            onClick={props.close.function}
            value={props.close.value}
          />
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
          <input
            className={classes.input}
            placeholder={copytext}
          />
        </div>
        <div className={classes.btndiv}>
          <button className={classes.button} value={copytext} onClick={copyToClipboard}>Copy</button>
        </div>
      </div>
      <div className={classes.flexcenterrow}>
        <div>
          <BlueButton onClick={props.close.function} value={props.close.value}>
            Close
          </BlueButton>
        </div>
        <div className={classes.whitespace}></div>
        <div>
          <Button onClick={props.next.function} value={props.next.value}>Next</Button>
        </div>
      </div>
    </Modal>
  );
};

export default Runtest;
