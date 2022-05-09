import Graph from "./Graph/Graph";
import Table from "./Table/Table";
import Header from "../../Elements/Headerahb/Header";
import CustomSchedule from "./PopUp/CustomSchedule/CustomSchedule";

const Analytics = (props) => {
  return (
    <>
      <Header parah="useremail@gmail.com" to="/inbox" />
      <Graph />
      <Table />
    </>
  );
};

export default Analytics;
