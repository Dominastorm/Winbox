import classes from "./Header.module.css";
import Card from "../../../UI/Card/Card";
import {Heading326} from "../../../UI/Heading/Heading"

const Header = () => {
  return (
    <Card className={classes.background}>
    <div>
      <Heading326>Settings</Heading326>
      </div>
    </Card>
  );
};

export default Header;
