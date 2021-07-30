import { menuAdd } from "../../utils/constants";
import List from "../List/List";
import classes from "./AddListButton.module.scss";
const AddListButton = () => {
  return (
    <>
      <List items={menuAdd} />
      <div className={classes.addMenuPopup}></div>
    </>
  );
};

export default AddListButton;
