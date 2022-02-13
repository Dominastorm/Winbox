import classes from "./Step1.module.css";
import Modal from "../../../UI/Modal/Modal";
import Button from "../../../UI/Button/Button";
import Button2 from "../../../UI/Button2/Button2";
import GoogleIcon from "./GoogleIcon";
import EmailIcon from "./EmailIcon";

const Step1 = () => {
  return (
    <Modal>
      <div className={classes.head}>
        <div className={classes.flex}>
          <h1 className={classes.heading}>Step 1-</h1>
          <h1 className={classes.headingblue}>Choose Inbox provider</h1>
        </div>
        <div>
          <h3>x</h3>
        </div>
      </div>
      <div>
        <h3 className={classes.heading3}>
          Select the provider of the inbox you want to warm-up
        </h3>
      </div>
      <div className={classes.flex}>
        <Button2
          className={classes.btnsize}
          heading="Gmail Gsuite"
          parah="Google Inbox"
          logoClass={classes.btnlogo}
          btnClass={classes.selected}
        >
          <GoogleIcon />
        </Button2>
        <Button2
          className={classes.btnsize}
          heading="Others"
          parah="Add with SMTPs"
          logoClass={classes.btnlogo}
          btnClass={classes.notselected}
        >
          <EmailIcon />
        </Button2>
      </div>
      <div className={classes.flexend}>
        <Button className={classes.btn}>Next</Button>
      </div>
    </Modal>
  );
};

export default Step1;
