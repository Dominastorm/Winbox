import classes from "./Heading.module.css"

const Heading = () => {
  return(<div className={classes.head}>
    <div className={classes.flex}>
      <h1 className={classes.heading}>Step 1-</h1>
      <h1 className={classes.headingblue}>Choose Inbox provider</h1>
    </div>
    <div>);
}

export default Heading;
