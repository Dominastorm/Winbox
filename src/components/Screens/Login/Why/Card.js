import classes from "./Card.module.css";
import Cont from "../../../UI/Card/Card";
import { Heading326 } from "../../../UI/Heading/Heading";

const Card = (props) => {
  return (
    <Cont className={`  ${classes.card} ${props.className}`}>
      <div className={classes.icon}>{props.children}</div>
      <div>
        <Heading326 className={classes.heading}>{props.heading}</Heading326>
      </div>
    </Cont>
  );
};

export default Card;
