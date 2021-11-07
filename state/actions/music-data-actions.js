import {
    INIT_MUSIC_CONTENT
  } from "../action-types";
  
  export const intiMusic = (payload) => {
    return {
      type: INIT_MUSIC_CONTENT,
      payload
    };
  };
  