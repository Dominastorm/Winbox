import classes from "./DivIHPb.module.css";
import Card from "../../UI/Card/Card";
import {Heading186} from "../../UI/Heading/Heading";

const Drive = (props) => {
  return (
    <>
      <Card className={`${classes.flex} ${props.className}   `}>
          <div className={classes.flexstart}>
            <div>{props.children}</div>
            <div>
              <Heading186>{props.heading}</Heading186>
              <p className={classes.parah}>{props.parah}</p>
            </div>
          </div>
          <div>
            {props.buttontext && (
              <button className={classes.button}>{props.buttontext}</button>
            )}
          </div>
      </Card>
    </>
  );
};

export default Drive;
