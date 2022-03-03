import classes from "./MobileBar.module.css";
import Logo from "../../../Icons/Logo"

const MobileBar = (props) => {
  return (
    <div className={classes.mobilebar}>
      <a href="#" className={classes.logo}>
        <Logo/>
      </a>
      <div class="bars">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MobileBar;
