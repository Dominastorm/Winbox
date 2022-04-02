import classes from "./EmailSpamChecker.module.css";
import DeleteIcon from "../../../Icons/DelIcon";
import Modal from "../../../UI/Modal/Modal";
import Button from "../../../UI/Button/Button";
import TableImage from "../../../Icons/TableImage";
import CopyIcon from "../Images/CopyIcon";
import { Heading186 } from "../../../UI/Heading/Heading";

const Runtest = (props) => {
  let copytext ="email4832ddsfsdxkekxslksdk@test-stage";

  const copyToClipboard = (event) => {
    navigator.clipboard.writeText(event.currentTarget.value);
  }

  return (
    <Modal onClick={props.close.function} value={props.close.value}>
      <div className={classes.flexend}>
        <div>
          <DeleteIcon onClick={props.close.function} value={props.close.value}/>
        </div>
      </div>
      <div className={classes.flexcenter}>
        <div>
          <h1 className={classes.heading}>Email spam checker</h1>
        </div>
        <TableImage height="30vh" />
        <Heading186 className={classes.heading2}>
          We are cheking the email you’ve sent. It may take up to 2 minutes
        </Heading186>
        <p className={classes.parah}>
          If you haven’t sent it yet, send the email you want to test to
        </p>
        <div className={classes.copy}>
          <div>
            <p className={classes.copyparah}>
              {copytext}
            </p>
          </div>
          <div >
            <button className={classes.copybutton} value={copytext} onClick={copyToClipboard}><CopyIcon/></button>
          </div>
        </div>
        <Button className={classes.button} onClick={props.close.function} value={props.close.value}>Close</Button>
      </div>
    </Modal>
  );
};

export default Runtest;
