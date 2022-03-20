import classes from "./Step2.module.css";
import Modal from "../../../../UI/Modal/Modal";
import Heading from "../../../../Elements/PopUpElements/Heading";
import Heading2 from "../../../../UI/Heading/Heading";
import Button from "../../../../UI/Button/Button";
import BlueButton from "../../../../UI/BlueButton/Button";
import RedButton from "../../../../UI/RedButton/Button";
import GoogleIcon from "../../../../Elements/PopUpElements/GoogleIcon";
import Input from "../../../../Elements/Input/Input";

const GoogleLogIn = () => {
  return (
    <>
      <form>
        <Input required="true">Campaign</Input>
        <RedButton className={classes.redbutton}>
          <GoogleIcon />
          <p className={classes.buttonparah}>Sign in with Google</p>
        </RedButton>
      </form>
      <div className={classes.flexspacebetween}>
        <BlueButton>Previous</BlueButton>
        <Button>Next</Button>
      </div>
    </>
  );
};

const SMTPLogin = () => {
  return (
    <>
      <form>
        <div className={classes.inputCont}>
          <Input className={classes.input} required="true">
            SMTP Username
          </Input>
          <Input className={classes.input} required="true">
            SMTP Password
          </Input>
        </div>
        <Heading2>Login to your Google Inbox</Heading2>
        <Input className={classes.input} required="true">
          Campaign Name
        </Input>
        <div className={classes.inputCont}>
          <Input className={classes.input2} required="true">
            SMTP Host
          </Input>
          <Input className={classes.input2} required="true">
            SMTP Part
          </Input>
          <Input className={classes.input2} required="true">
            SMTP Protocol
          </Input>
        </div>
        <RedButton className={classes.redbutton}>
          <p className={classes.buttonparah}>Check Connection</p>
        </RedButton>
      </form>
      <div className={classes.flexspacebetween}>
        <BlueButton>Previous</BlueButton>
        <Button>Next</Button>
      </div>
    </>
  );
};

const Step2 = () => {
  const LoginType = 1;

  return (
    <Modal>
      <Heading step="Step 2 - ">Connect your inbox</Heading>
      <Heading2>Select the provider of the inbox you want to warm-up</Heading2>
      {LoginType == 0 ? <GoogleLogIn /> : <SMTPLogin />}
    </Modal>
  );
};

export default Step2;
