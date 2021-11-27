import {
  INIT_MUSIC_CONTENT,
  END_LOADING
} from "../action-types";

export const intiMusic = (payload) => {
  return {
    type: INIT_MUSIC_CONTENT,
    payload
  };
};

export const endLoading = () => {
  return {
    type: END_LOADING,
  };
};

