import React from "react";
import classes from "./Step3.module.css";
import Modal from "../../../../UI/Modal/Modal";
import Heading from "../../../../Elements/PopUpElements/Heading";
import { Heading186 } from "../../../../UI/Heading/Heading";
import Button from "../../../../UI/Button/Button";
import BlueButton from "../../../../UI/BlueButton/Button";
import Input from "../../../../Elements/Input/Input";
import Button2 from "../../../../UI/Button2/Button2";
import CustomChart from "./Icons/CustomChart";
import FlatChart from "./Icons/FlatChart";
import ProgressiveChart from "./Icons/ProgressiveChart";
import RandomizedChart from "./Icons/RandomizedChart";
import BarChart from "./BarChart";
import InputDate from "./InputDate";
import CalenderPopUp from "./CalenderPopUp.js"

const Step2 = () => {
  const [selected, setSelected] = React.useState(1);
  const [showPopUp, setShowPopUp] = React.useState(0);

  const select = (event) => {
    setSelected(event.currentTarget.value);
  };

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  }

  return (
    <>
    {showPopUp && <CalenderPopUp onClick={togglePopUp}/>}
    <Modal modalClass={classes.background}>
      <Heading step="Step 3 - ">Warm-up options</Heading>
      <Heading186 className={classes.font14}>
        Select your Warm-up recipe
      </Heading186>
      <div className={classes.flex}>
        <Button2
          className={classes.btnsize}
          heading="Grow Progressive"
          parah="Most recommended"
          logoClass={classes.btnlogo}
          btnClass={selected == 1 ? classes.selected : classes.notselected}
          onClick={select}
          value={1}
        >
          <ProgressiveChart />
        </Button2>
        <Button2
          className={classes.btnsize}
          heading="Flat"
          parah="For specific need"
          logoClass={classes.btnlogo}
          btnClass={selected == 2 ? classes.selected : classes.notselected}
          onClick={select}
          value={2}
        >
          <FlatChart />
        </Button2>
        <Button2
          className={classes.btnsize}
          heading="Randomized"
          parah="For experimentation"
          logoClass={classes.btnlogo}
          btnClass={selected == 3 ? classes.selected : classes.notselected}
          onClick={select}
          value={3}
        >
          <RandomizedChart />
        </Button2>
        <Button2
          className={classes.btnsize}
          heading="Custom"
          parah="For cold email experts"
          logoClass={classes.btnlogo}
          btnClass={selected == 4 ? classes.selected : classes.notselected}
          onClick={select}
          value={4}
        >
          <CustomChart />
        </Button2>
      </div>
      <div className={classes.flex}>
        <div className={classes.inputcont}>
          <InputDate onClick={togglePopUp}/>
          <p className={classes.parah}>
            45 days min recom. <div>(always warm-up)</div>
          </p>
        </div>
        <div className={classes.inputcont}>
          <Input className={classes.input} required="true">
            Maximum email sent/day
          </Input>
          <p className={classes.parah}>
            40 recommended, 210 max <div>(sending limit)</div>
          </p>
        </div>
        <div className={classes.inputcont}>
          <Input className={classes.input} required="true">
            Reply rate/day, %
          </Input>
          <p className={classes.parah}>
            30% recom., 45% max <div>(reply rate limit)</div>
          </p>
        </div>
      </div>
      <div className={classes.barchart}>
        <React.StrictMode>
          <BarChart />
        </React.StrictMode>
      </div>
      <div className={classes.flexspacebetween}>
        <BlueButton>Previous</BlueButton>
        <Button>Next</Button>
      </div>
    </Modal>
  </>
  );
};

export default Step2;
