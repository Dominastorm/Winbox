import classes from "./SignUpPage.module.css";
import Card from "../../../UI/Card/Card";
import Button from "../../../UI/Button/Button";
import Heading, { Heading326 } from "../../../UI/Heading/Heading";
import Input from "../../../Elements/Input/Input";
import Logo from "../../../Icons/Logo";

const User = (props) => {
  return (
    <div className={classes.container}>
      <div></div>
      <Card className={classes.background}>
        <div className={classes.logocont}>
          <Heading326 className={classes.heading}>Welcome to the</Heading326>
          <Logo />
          <Heading326 className={classes.heading}>Family! </Heading326>
        </div>
        <Heading className={classes.headingp}>
          Create an account and start to warm-up your email account.
        </Heading>
        <div className={classes.passinput}>
          <Input required="true">Name</Input>
          <Input required="true">Email</Input>
          <Input required="true">Password</Input>
          <div className={classes.center}>
          <input type="checkbox" className={classes.checkbox} />
          <Heading className={classes.checkboxparah}>
            I accept the Terms & Conditions and Privacy Policy
          </Heading>
          </div>
        </div>
        <Button className={classes.button}>Create my account</Button>
        <Heading className={classes.question}>
          Already have an account?{" "}
          <a className={classes.link}>Sign in</a>
        </Heading>
      </Card>
    </div>
  );
};

export default User;
