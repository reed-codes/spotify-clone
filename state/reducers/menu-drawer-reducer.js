import {
  TOGGLE_MENU_DRAWER,
  OPEN_MENU_DRAWER_FOR_SEARCH,
  OPEN_MENU_DRAWER,
} from "../action-types";

const INITIAL_NAV_STATE = {
  menuDrawerIsOpen: false,
  menuDrawerIsOpenForSearch: false,
};

const reducer = (state = INITIAL_NAV_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MENU_DRAWER:
      return {
        menuDrawerIsOpenForSearch: false,
        menuDrawerIsOpen: !state.menuDrawerIsOpen,
      };
    case OPEN_MENU_DRAWER:
      return {
        ...state,
        menuDrawerIsOpen: true,
      };
    case OPEN_MENU_DRAWER_FOR_SEARCH:
      return {
        menuDrawerIsOpen: true,
        menuDrawerIsOpenForSearch: true,
      };

    default:
      return state;
  }
};

export default reducer;
