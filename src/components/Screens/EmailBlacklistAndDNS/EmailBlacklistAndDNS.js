import React from "react";
import Sidebar from "../../Elements/SideBar/SideBar";
import classes from "./EmailBlacklistAndDNS.module.css";
import MainBar from "./MainBar/MainBar";
import Report from "./Report/Report";

const EmailBlacklistAndDNS = () => {
  const [showReport, setShowReport] = React.useState("0");

  const renderReport = (event) => {
    setShowReport(1);
  };

  const renderMainPage = (event) => {
    setShowReport(0);
  };

  return (
    <>
    {showReport=="0" && <MainBar renderReport={renderReport}/>}
    {showReport=="1" && <Report renderMainPage={renderMainPage} />}
    </>
  );
};

export default EmailBlacklistAndDNS;
