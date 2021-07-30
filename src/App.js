import classes from "./App.module.scss";
import List from "./components/List/List";
import AddListButton from "./components/AddListButton/AddListButton";
import { menuHeader, menuItems } from "./utils/constants";

function App() {
  return (
    <div className={classes.todo}>
      <div className={classes.sidebar}>
        <List items={menuHeader}></List>
        <List items={menuItems} isRemovable />
        <AddListButton />
      </div>
      <div className={classes.tasks}></div>
    </div>
  );
}

export default App;
