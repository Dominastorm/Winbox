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

const Step2 = () => {
  return (
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
          btnClass={classes.selected}
        >
          <ProgressiveChart />
        </Button2>
        <Button2
          className={classes.btnsize}
          heading="Flat"
          parah="For specific need"
          logoClass={classes.btnlogo}
          btnClass={classes.notselected}
        >
          <FlatChart />
        </Button2>
        <Button2
          className={classes.btnsize}
          heading="Randomized"
          parah="For experimentation"
          logoClass={classes.btnlogo}
          btnClass={classes.notselected}
        >
          <RandomizedChart />
        </Button2>
        <Button2
          className={classes.btnsize}
          heading="Custom"
          parah="For cold email experts"
          logoClass={classes.btnlogo}
          btnClass={classes.notselected}
        >
          <CustomChart />
        </Button2>
      </div>
      <div className={classes.flex}>
        <div className={classes.inputcont}>
          <Input className={classes.input} required="true">
            Warm-up timing range
          </Input>
        </div>
        <div className={classes.inputcont}>
          <Input className={classes.input} required="true">
            Maximum email sent/day
          </Input>
        </div>
        <div className={classes.inputcont}>
          <Input className={classes.input} required="true">
            Reply rate/day, %
          </Input>
        </div>
      </div>
      <div className={classes.flexspacebetween}>
        <BlueButton>Previous</BlueButton>
        <Button>Next</Button>
      </div>
    </Modal>
  );
};

export default Step2;
