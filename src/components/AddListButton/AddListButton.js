import { menuAdd } from "../../utils/constants";
import { useState } from "react";
import ColorBadge from "../ColorBadge/ColorBadge";
import closeSvg from "../../assets/img/close.svg";
import List from "../List/List";
import classes from "./AddListButton.module.scss";
const AddListButton = ({ colors }) => {
  const [isVisible, setVisible] = useState(true);
  const [selectedColor, changeColor] = useState(colors[0].id);
  return (
    <>
      <List
        items={menuAdd}
        onClick={() => {
          setVisible(!isVisible);
        }}
      />
      {isVisible && (
        <div className={classes.addMenuPopup}>
          <div
            className={classes.closeIcon}
            onClick={() => {
              setVisible(false);
            }}
          >
            <img src={closeSvg} alt="close-icon"></img>
          </div>
          <input
            type="text"
            className={classes.input}
            placeholder="Name of the list"
          ></input>
          <ul className={classes.colorItems}>
            {colors.map((color) => {
              return (
                <ColorBadge
                  className={selectedColor === color.id && "badge__big-active"}
                  onClick={() => {
                    changeColor(color.id);
                  }}
                  big={true}
                  color={color.hex}
                  key={color.id}
                ></ColorBadge>
              );
            })}
          </ul>
          <button className={classes.btn}>Add</button>
        </div>
      )}
    </>
  );
};

export default AddListButton;
