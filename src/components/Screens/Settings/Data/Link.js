import classes from "./Link.module.css";

const Link = (props) => {
  return (
    <div>
      <a className={props.selected ? classes.selected : classes.notselected} onClick={props.onClick}>{props.children}</a>
    </div>
  );
};

export default Link;
