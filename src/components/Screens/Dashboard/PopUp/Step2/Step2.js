import classes from "./Step2.module.css";
import Modal from "../../../../UI/Modal/Modal";
import Heading from "../Elements/Heading";
import Heading2 from "../Elements/Heading2";
import Button from "../../../../UI/Button/Button";
import BlueButton from "../../../../UI/BlueButton/BlueButton";
import GoogleIcon from "../Elements/GoogleIcon";

const Step2 = () => {
  return (
    <Modal>
      <Heading step="Step 2 - ">Connect your inbox</Heading>
      <Heading2>Select the provider of the inbox you want to warm-up</Heading2>
      <form>
        <label>
          <p className={classes.label}>Campaign Name</p>
          <p className={classes.asterik}>*</p>
        </label>
        <input className={classes.input} placeholder="Campaign Name" />
        <button className={classes.redbtn}>
          <div>
            <GoogleIcon />
          </div>
          <p>
          Sign in with Google
          </p>
        </button>
      </form>
      <div className={classes.flexsb}>
        <BlueButton>Previous</BlueButton>
        <Button>Next</Button>
      </div>
    </Modal>
  );
};

export default Step2;
