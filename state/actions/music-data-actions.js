import {
  INIT_MUSIC_CONTENT,
  POPULATE_NEW_RELEASES
} from "../action-types";

export const intiMusic = (payload) => {
  return {
    type: INIT_MUSIC_CONTENT,
    payload
  };
};
