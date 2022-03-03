import classes from "./Why.module.css";
import { Heading447 } from "../../../UI/Heading/Heading";

const Why = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <Heading447 className={classes.headingTop}>
          Why Winbox?
        </Heading447>
        <Heading447 className={classes.heading}>
          The efficient solution to warming up<br/> your inbox
        </Heading447>
      </div>
      <div></div>
    </div>
  );
};

export default Why;
