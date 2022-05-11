import React from "react";
import classes from "./Recent.module.css";

import Card from "../../../../UI/Card/Card";
import Heading from "../../../../UI/Heading/Heading";
import Message from "./Message";

var request = new XMLHttpRequest();
var arr;
var data;
var messagetable;

const Details = () => {
  const [loading, setLoading] = React.useState(1);

  React.useEffect(() => {
    data = [];
    
    request.open(
      "GET",
      "https://private-9933d8-winbox.apiary-mock.com/activity"
    );

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        arr = JSON.parse(this.responseText);
        arr.forEach((obj) => {
          data.push(obj.date);
        });
        messagetable = data.map((time) => <Message>{time}</Message>);
        setLoading(0);
      }
    };
    request.send();
  }, []);

  return (
    <Card className={classes.background}>
      <Heading>Recent Activity</Heading>
      {loading == 0 && messagetable}
    </Card>
  );
};

export default Details;
