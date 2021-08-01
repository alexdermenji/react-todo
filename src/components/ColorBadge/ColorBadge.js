import classNames from "classnames";
import classes from "./ColorBadge.module.scss";
const ColorBadge = ({ color, big, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: `${color}` }}
      className={classNames(classes.badge, classes[className], {
        [classes.badge__big]: big,
      })}
    ></div>
  );
};

export default ColorBadge;
