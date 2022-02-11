import classes from "./Header.module.css";
import Card from "../../UI/Card";

const Header = () => {
  return (
    <Card className={classes.background}>
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <div>
          
        </div>
        <div>
          <h3>Katarina</h3>
          <img src="#" />
        </div>
      </div>
    </Card>
  );
};

export default Header;
