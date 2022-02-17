import classes from "./CustomSchedule.module.css";
import Modal from "../../../../UI/Modal/Modal";
import Heading from "../../../Dashboard/PopUp/Elements/Heading";
import Button from "../../../../UI/Button/Button";
import BlueButton from "../../../../UI/BlueButton/BlueButton";

const Step2 = () => {
  return (
    <Modal>
      <div className={classes.padding}>
        <Heading step="CustomSchedule"></Heading>
        <div className={classes.background}>
          <h3 className={classes.heading}>Date</h3>
          <h3 className={classes.heading}>Interactions</h3>
          <h3 className={classes.heading}>Reply percent</h3>
          <h3 className={classes.heading}>Progress</h3>
          <h3 className={classes.heading}>Sent</h3>
        </div>
        <div className={classes.dets}>
          <h3 className={classes.parah}>Inbox</h3>
          <h3 className={classes.parah}>Sent today</h3>
          <h3 className={classes.parah}>Created</h3>
          <h3 className={classes.parah}>Status</h3>
          <h3 className={classes.parah}>Actions</h3>
        </div>
        <div className={classes.flex}>
          <div>
            <BlueButton>Close</BlueButton>
          </div>
          <div>
            <Button>Save</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Step2;
