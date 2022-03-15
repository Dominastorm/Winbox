import React from "react"
import classes from "./Step1.module.css";
import Modal from "../../../../UI/Modal/Modal";
import Button from "../../../../UI/Button/Button";
import Button2 from "../../../../UI/Button2/Button2";
import GoogleIcon from "./GoogleIcon";
import EmailIcon from "./EmailIcon";
import Heading from "../../../../Elements/PopUpElements/Heading";
import Heading2 from "../../../../UI/Heading/Heading";

const Step1 = () => {
  const [selected,setSelected] = React.useState(0);

  return (
    <Modal>
      <Heading step="Step 1 - ">Choose Inbox provider</Heading>
      <Heading2 className={classes.heading}>Select the provider of the inbox you want to warm-up</Heading2>
      <div className={classes.flex}>
        <Button2
          className={classes.btnsize}
          heading="Gmail Gsuite"
          parah="Google Inbox"
          logoClass={classes.btnlogo}
          btnClass={!selected ? classes.selected : classes.notselected}
        >
          <GoogleIcon />
        </Button2>
        <Button2
          className={classes.btnsize}
          heading="Others"
          parah="Add with SMTPs"
          logoClass={classes.btnlogo}
          btnClass={selected ? classes.selected : classes.notselected}
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
