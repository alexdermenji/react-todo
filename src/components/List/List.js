import classes from "./List.module.scss";
import ColorBadge from "../ColorBadge/ColorBadge";
import classNames from "classnames";
const List = ({ items, onClick }) => {
  return (
    <ul className={classes.list} onClick={onClick}>
      {items.map((item) => {
        return (
          <li
            key={item.id}
            className={classNames(classes.list__item, item.className, {
              [classes.active]: item.active,
              [classes.listItemAdd]: item.addButton,
            })}
          >
            <i>{item.icon ? item.icon : <ColorBadge color={item.color} />}</i>
            <span>{item.name}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
