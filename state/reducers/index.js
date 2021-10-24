import { combineReducers } from "redux";
import menuDrawerReducer from "./menu-drawer-reducer";

const reducers = combineReducers({
  menuState: menuDrawerReducer,
});

export default reducers;
