import classes from "./SideBar.module.css";
import Card from "../../UI/Card/Card";

const SideBar = () => {
  return (
    <Card className={classes.background}>
      <span>
        <div className={classes.container}>
          <img src="images/expand.png" className={classes.expand} />
        </div>
        <div className={classes.container}>
          <h1>N</h1>
          <p>n</p>
          <h1>N</h1>
          <p>n</p>
        </div>
      </span>
      <span>
        <div className={classes.containerTop}>
          <h1>N</h1>
          <p>n</p>
          <h1>N</h1>
          <p>n</p>
        </div>
      </span>
    </Card>
  );
};

export default SideBar;
