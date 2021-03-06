import classes from "./LoginPage.module.css";
import {Link} from 'react-router-dom';

import Card from "../../../UI/Card/Card";
import Button from "../../../UI/Button/Button";
import Heading, { Heading326 } from "../../../UI/Heading/Heading";
import Input from "../../../Elements/Input/Input";
import Logo from "../../../Icons/Logo";


const User = (props) => {
  return (
    <div className={classes.container}>
      <div></div>
      <Card className={classes.background}>
        <div className={classes.logocont}>
          <Heading326 className={classes.heading}>Sign in to &nbsp;</Heading326>
          <Logo />
        </div>
        <Heading className={classes.headingp}>Login to your account</Heading>
        <div className={classes.passinput}>
          <Input required="true">Email</Input>
          <Input required="true">Password</Input>
        </div>
        <div className={classes.flexend}>
        <Heading><a className={classes.link} style={{color:"#707683"}}>Forgot Password?</a></Heading>
        </div>
        <div className={classes.button}>
          <Button onClick={props.onClick}>Sign In</Button>
        </div>
        <Heading className={classes.question}>
          Not a winbox user yet?{" "}
          <Link className={classes.link} to="/sign-up">Create your account</Link>
        </Heading>
        <div className={classes.division}>
          <div className={classes.border}></div>
          <Heading>OR</Heading>
          <div className={classes.border}></div>
        </div>
      </Card>
    </div>
  );
};

export default User;
