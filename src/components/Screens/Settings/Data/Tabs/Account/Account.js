import classes from "./Account.module.css";
import Card from "../../../../../UI/Card/Card";
import Button2 from "../../../../../UI/Button2/Button2";
import Heading, { Heading186 } from "../../../../../UI/Heading/Heading";
import InformationSection from "../Elements/InformationSection";

const User = (props) => {
  return (
    <div className={classes.container}>
      <InformationSection />
      <Card className={classes.background}>
        <Heading>Account</Heading>
        <Button2
          className={classes.btnsize}
          heading="User1"
          parah="user1@gmail.com"
          btnClass={classes.button}
        />
      </Card>
    </div>
  );
};

export default User;
