import React from "react";
import classes from "./Dashboard.module.css";
import MainBar from "./MainBar/MainBar";
import Analytics from "../Analytics/Analytics";

const Dashboard = () => {
  const [showAnalysis, setShowAnalysis] = React.useState(0);

  const renderAnalysis = (event) => {
    setShowAnalysis(1);
  };

  const renderMainPage = (event) => {
    setShowAnalysis(0);
  };

  return (
    <>
      {showAnalysis === 0 && (
        <MainBar renderAnalysis={renderAnalysis} />
      )}
      {showAnalysis === 1 && (
        <Analytics renderMainPage={renderMainPage} />
      )}
    </>
  );
};

export default Dashboard;
