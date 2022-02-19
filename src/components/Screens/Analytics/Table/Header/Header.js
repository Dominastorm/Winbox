import classes from "./Header.module.css";
import Card from "../../../../UI/Card/Card";
import Heading from "../../../../UI/Heading/Heading"
import Button from "../../../../UI/Button/Button"

const Details = () => {
  return (
    <Card className={classes.background}>
      <div>
        <Heading>Custom Schedule</Heading>
      </div>
      <div>
        <Button className={classes.bluebutton}>Clear</Button>
      </div>
    </Card>
  );
};

export default Details;
