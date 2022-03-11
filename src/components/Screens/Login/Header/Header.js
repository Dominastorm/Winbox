import classes from "./Header.module.css";
import Logo from "../../../Icons/Logo";
import Button from "../../../UI/Button/Button";
import BlueButton from "../../../UI/BlueButton/Button";

const Header = (props) => {
  return (
    <div className={classes.container}>
      <Logo className={classes.logo} height="10vh" width="133px" />
      <div>
        <BlueButton href="#" className={classes.bluebutton}>
          Connect Your Inbox
        </BlueButton>
        <Button href="#" className={classes.button}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Header;
