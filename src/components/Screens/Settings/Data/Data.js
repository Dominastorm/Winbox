import classes from "./Data.module.css";
import Card from "../../../UI/Card/Card";
import Link from "./Link";
import User from "./Tabs/User/User";

const Data = () => {
  return (
    <>
      <Card className={classes.background}>
        <Link selected={1}>User</Link>
        <Link selected={0}>Account</Link>
        <Link selected={0}>Subscription</Link>
        <Link selected={0}>Invoices</Link>
      </Card>
      <User />
    </>
  );
};

export default Data;
