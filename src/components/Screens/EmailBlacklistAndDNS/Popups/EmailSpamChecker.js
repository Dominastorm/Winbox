import classes from "./EmailSpamChecker.module.css";
import DeleteIcon from "../../../Icons/DelIcon";
import Modal from "../../../UI/Modal/Modal";
import Button from "../../../UI/Button/Button";
import TableImage from "../../../Icons/TableImage";
import CopyIcon from "../Images/CopyIcon";
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
          <h1 className={classes.heading}>Email spam checker</h1>
        </div>
        <TableImage height="30vh" />
        <Heading186 className={classes.heading2}>
          We are cheking the email you’ve sent. It may take up to 2 minutes{" "}
        </Heading186>
        <p className={classes.parah}>
          If you haven’t sent it yet, send the email you want to test to
        </p>
        <div className={classes.copy}>
          <div>
            <p className={classes.copyparah}>
              email4832ddsfsdxkekxslksdk@test-stage
            </p>
          </div>
          <div >
            <button className={classes.copybutton}><CopyIcon/></button>
          </div>
        </div>
        <Button className={classes.button}>Next</Button>
      </div>
    </Modal>
  );
};

export default Runtest;
