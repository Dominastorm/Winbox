import classes from "./Header.module.css";
import Card from "../../../../UI/Card/Card";
import Heading from "../../../../UI/Heading/Heading";
import BlueButton from "../../../../UI/BlueButton/Button";

const Details = () => {
  return (
    <Card className={classes.background}>
      <div>
        <Heading>Schedule</Heading>
      </div>
      {/*<div>
        <BlueButton className={classes.bluebutton}>Clear</BlueButton>
      </div>*/}
    </Card>
  );
};

export default Details;
