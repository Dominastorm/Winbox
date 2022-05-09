import React from "react";
import classes from "./Header.module.css";
import Card from "../../UI/Card/Card";
import Logo from "../../Icons/Logo";
import NotifIcon from "./NotifIcon";

var request = new XMLHttpRequest();
var name, email, image;

const Header = () => {
  const [loading, setLoading] = React.useState(1);

  React.useEffect(() => {
    request.open(
      "GET",
      "https://private-9933d8-winbox.apiary-mock.com/profile"
    );

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        const message = JSON.parse(this.responseText);
        name = message.name;
        email = message.email_id;
        image = message.profile_picture;
        setLoading(0);
      }
    };
    request.send();

    var request2 = new XMLHttpRequest();

    request2.open(
      "GET",
      "https://private-9933d8-winbox.apiary-mock.com/notifications"
    );

    request2.onreadystatechange = function () {
      if (this.readyState === 4) {
        // console.log("Status:", this.status);
        // console.log("Headers:", this.getAllResponseHeaders());
        // console.log("Body:", this.responseText);
      }
    };

    request2.send();
  }, []);

  return (
    <Card className={classes.background}>
      <div className={classes.flex}>
        <Logo />
      </div>
      <div className={classes.flex}>
        <NotifIcon className={classes.icon} />
        <h3 className={classes.name}>{name}</h3>
        <img src={image} className={classes.userImg} />
      </div>
    </Card>
  );
};

export default Header;
