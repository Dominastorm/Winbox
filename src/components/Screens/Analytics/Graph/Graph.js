import classes from "./Graph.module.css";
import Card from "../../../UI/Card/Card";
import Button from "../../../UI/Button/Button";

const Graph = () => {
  return (
    <div className={classes.background}>
    <Card className={classes.bar}>
      <div>

      </div>
    </Card>
    <Card className={classes.circle}>
      <div>

      </div>
    </Card>
    </div>
  );
};

export default Graph;
