import classes from "./ColorBadge.module.css";
const ColorBadge = ({ color }) => {
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={classes.badge}
    ></div>
  );
};

export default ColorBadge;
