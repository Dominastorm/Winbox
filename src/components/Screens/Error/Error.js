import Sidebar from "../../Elements/SideBar/SideBar";
import Card from "../../UI/Card/Card";
import { Heading186 } from "../../UI/Heading/Heading";
import classes from "./Error.module.css";
import {LinkButton} from "../../UI/Button/Button";
import PlugIcon from "./PlugIcon";

const Error = (props) => {
  return (
    <>
      <Card className={classes.background}>
        <h1 className={classes.herotext}>404</h1>
        <PlugIcon />
        <Heading186 className={classes.heading}>
          Opppppppps, something went wrong
        </Heading186>
        <p className={classes.parah}>
          We’re sorry, the page you requested could not be found.
          <br />
          Please go back to the homepage.
        </p>
        <div>
          <LinkButton className={classes.btn} to="/inbox">
            Go Home
          </LinkButton>
        </div>
      </Card>
    </>
  );
};

export default Error;
