import classes from "./Recent.module.css";
import Card from "../../../../UI/Card/Card";
import Heading from "../../../../UI/Heading/Heading";
import Message from "./Message"

const Details = () => {
  return (
    <Card className={classes.background}>
      <Heading>Recent Activity</Heading>
      <Message>Jan 5, 2022, 08:56:13 PM</Message>
      <Message>Jan 5, 2022, 08:56:13 PM</Message>
      <Message>Jan 5, 2022, 08:56:13 PM</Message>
      <Message>Jan 5, 2022, 08:56:13 PM</Message>
      <Message>Jan 5, 2022, 08:56:13 PM</Message>
    </Card>
  );
};

export default Details;
