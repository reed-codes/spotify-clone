import {
  TOGGLE_MENU_DRAWER,
  OPEN_MENU_DRAWER,
  OPEN_MENU_DRAWER_FOR_SEARCH,
} from "../action-types";

export const toggleMenuDrawer = () => {
  return {
    type: TOGGLE_MENU_DRAWER,
  };
};

export const openMenuDrawer = () => {
  return {
    type: OPEN_MENU_DRAWER,
  };
};

export const openMenuDrawerForSearch = () => {
  return {
    type: OPEN_MENU_DRAWER_FOR_SEARCH,
  };
};
