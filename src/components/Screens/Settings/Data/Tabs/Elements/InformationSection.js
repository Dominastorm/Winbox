import classes from "../User/User.module.css";
import Card from "../../../../../UI/Card/Card";
import Button from "../../../../../UI/Button/Button";
import Heading, { Heading186 } from "../../../../../UI/Heading/Heading";
import Input from "../../../../../Elements/Input/Input";

const User = (props) => {
  return (
    <Card className={classes.background}>
      <Heading>Information</Heading>
      <div className={classes.profile}>
        <div className={classes.image}></div>
        <div>
          <Heading186>Your Photo</Heading186>
          <p className={classes.profiledes}>
            File dimensions must be lower than 1200*1200 px, <br />
            Max file size 5mb
          </p>
        </div>
      </div>
      <div className={classes.input}>
        <Input>Display Name</Input>
        <Input>Email</Input>
      </div>
      <div className={classes.flexend}>
        <Button>Save</Button>
      </div>
    </Card>
  );
};

export default User;
