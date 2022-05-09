import React from "react"
import Row from "./Row";

var request = new XMLHttpRequest();
var details;
var List;

const Grid = () => {

  const [loading, setLoading] = React.useState(1);

  React.useEffect(() => {
    request.open(
      "GET",
      "https://private-9933d8-winbox.apiary-mock.com/schedule"
    );

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        details = JSON.parse(this.responseText);
        console.log(details);
        List = details.map((data) => (
          <Row
            date={data.date}
            interactions={data.interactions}
            replypercent={data.reply_percent}
            progress={data.progress_percent}
            sent={data.sent}
          />
        ));
        setLoading(0);
      }
    };
    request.send();
  }, []);

  return <>{loading == 0 && List}</>;
};

export default Grid;
