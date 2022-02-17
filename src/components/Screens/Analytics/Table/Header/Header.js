import classes from "./Header.module.css";
import Card from "../../../../UI/Card/Card";
import BlueButton from "../../../../UI/BlueButton/BlueButton";

const Details = () => {
  return (
    <Card className={classes.background}>
      <div>
        <h3 className={classes.heading}>Custom Schedule</h3>
      </div>
      <div>
        <BlueButton>Clear</BlueButton>
      </div>
    </Card>
  );
};

export default Details;
