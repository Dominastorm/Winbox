import classes from "./User.module.css";
import Card from "../../../../../UI/Card/Card";
import Button from "../../../../../UI/Button/Button";
import Heading, { Heading186 } from "../../../../../UI/Heading/Heading";
import Input from "../../../../../Elements/Input/Input";
import InformationSection from "../Elements/InformationSection";
const User = (props) => {
  return (
    <div className={classes.container}>
    <InformationSection/>
      <Card className={classes.background}>
        <Heading>Change Password</Heading>
        <div className={classes.passinput}>
          <Input>Old Password</Input>
          <Input>New Password</Input>
          <Input>Confirm Password</Input>
        </div>
        <div className={classes.flexend}>
          <Button>Change</Button>
        </div>
      </Card>
    </div>
  );
};

export default User;
