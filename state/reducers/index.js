import { combineReducers } from "redux";
import menuDrawerReducer from "./menu-drawer-reducer";
import musicData from "./music-data-reducer";
import userData from './user-data-reducer'

const reducers = combineReducers({
  menuState: menuDrawerReducer,
  musicData : musicData,
  userData : userData
});

export default reducers;
