import classes from "./Step2.module.css";
import Modal from "../../../../UI/Modal/Modal";
import Heading from "../../../../Elements/PopUpElements/Heading";
import Heading2 from "../../../../UI/Heading/Heading";
import Button from "../../../../UI/Button/Button";
import BlueButton from "../../../../UI/BlueButton/Button";
import RedButton from "../../../../UI/RedButton/Button";
import GoogleIcon from "../../../../Elements/PopUpElements/GoogleIcon";
import Input from "../../../../Elements/Input/Input";

const Step2 = () => {
  return (
    <Modal>
      <Heading step="Step 2 - ">Connect your inbox</Heading>
      <Heading2>Select the provider of the inbox you want to warm-up</Heading2>
      <form>
        <Input className={classes.input} required="true">Campaign </Input>
        <RedButton className={classes.redbutton}>
          <GoogleIcon />
          <p className={classes.buttonparah}>Sign in with Google</p>
        </RedButton>
      </form>
      <div className={classes.flexspacebetween}>
        <BlueButton>Previous</BlueButton>
        <Button>Next</Button>
      </div>
    </Modal>
  );
};

export default Step2;
