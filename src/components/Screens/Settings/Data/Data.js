import React, { useState } from "react";
import classes from "./Data.module.css";
import Card from "../../../UI/Card/Card";
import Link from "./Link";
import User from "./Tabs/User/User";
import Subscription from "./Tabs/Subscription/Subscription"
import Invoices from "./Tabs/Invoices/Invoices";

const Data = () => {
  const [selected, setSelected] = useState(1);

  return (
    <>
      <Card className={classes.background}>
        <Link
          selected={selected === 1 ? 1 : 0}
          onClick={() => {
            setSelected(1);
          }}
        >
          User
        </Link>
        <Link
          selected={selected === 2 ? 1 : 0}
          onClick={() => {
            setSelected(2);
          }}
        >
          Account
        </Link>
        <Link
          selected={selected === 3 ? 1 : 0}
          onClick={() => {
            setSelected(3);
          }}
        >
          Subscription
        </Link>
        <Link
          selected={selected === 4 ? 1 : 0}
          onClick={() => {
            setSelected(4);
          }}
        >
          Invoices
        </Link>
      </Card>
      {selected === 1 && <User />}
      {selected === 2 && <User />}
      {selected === 3 && <Subscription />}
      {selected === 4 && <Invoices />}
    </>
  );
};

export default Data;
