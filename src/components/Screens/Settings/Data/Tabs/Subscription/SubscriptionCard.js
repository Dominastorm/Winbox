import Button from "../../../../../UI/Button/Button";
import RedButton from "../../../../../UI/RedButton/Button";
import { Heading186, Heading326 } from "../../../../../UI/Heading/Heading";
import classes from "./SubscriptionCard.module.css";

const SubscriptionCard = (props) => {
  return (
    <div className={classes.container}>
      <Heading186>{props.heading}</Heading186>
      <div className={classes.flexRow}>
        <h2 className={classes.dollarSign}>$</h2>
        <Heading326 className={classes.amount}>{props.amount}</Heading326>
        <Heading186 className={classes.subheading}>/month</Heading186>
      </div>
      {props.children}
      {props.taken ? (
        <RedButton>Cancel</RedButton>
      ) : (
        <Button>{props.buttontext}</Button>
      )}
    </div>
  );
};

export default SubscriptionCard;
