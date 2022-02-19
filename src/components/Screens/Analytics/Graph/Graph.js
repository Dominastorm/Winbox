import classes from "./Graph.module.css";
import Card from "../../../UI/Card/Card";
import Button from "../../../UI/Button/Button";
import Heading from "../../../UI/Heading/Heading";

const Graph = () => {
  return (
    <div className={classes.background}>
      <Card className={classes.bar}>
        <div>
          <Heading>Inbox warning plan</Heading>
        </div>
      </Card>
      <Card className={classes.circle}>
        <div>
          <Heading>Inbox vs Spam</Heading>
        </div>
      </Card>
    </div>
  );
};

export default Graph;
