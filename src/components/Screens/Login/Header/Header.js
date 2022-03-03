import classes from "./Header.module.css";
import MobileBar from "./MobileBar.js";

const Header = (props) => {
  return (
    <div className={classes.headerMenu}>
      <MobileBar/>
    </div>
  );
};

export default Header;
