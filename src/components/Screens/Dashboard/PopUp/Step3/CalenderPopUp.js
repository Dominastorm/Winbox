import React, { useState } from "react";
import "./CalenderPopUp.css";
import classes from "./CalenderPopUp.module.css"
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Modal from "../../../../UI/Modal/Modal";

export default function App(props) {
  const today = new Date();

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: today.setDate(today.getDate() + 45),
      key: "selection",
    },
  ]);

  const onChange = (item) => {
    setState([item.selection]);
  };

  return (
    <Modal modalClass={classes.modalClass} onClick={props.onClick} backdropClass={classes.backdropClass}>
      <DateRange
        onChange={onChange}
        moveRangeOnFirstSelection={false}
        ranges={state}
        direction={"horizontal"}
        months={2}
        minDate={new Date()}
        showSelectionPreview={true}
        showPreview={true}
        showMonthAndYearPickers={true}
        dragSelectionEnabled={true}
        weekdayDisplayFormat="ccc"
        preview={{ startDate: new Date(), endDate: new Date(), color: "#f00" }}
      />
  </Modal>
  );
}
