import {
    INIT_MUSIC_CONTENT,
  } from "../action-types";

  const INIT_STATE = {
    charting : {
        albums : [],
        artists : [],
        playlists : [],
        podcasts : [],
        tracks : []
    },
    editorial:{
        albums : [],
        artists : [],
        playlists : [],
        podcasts : [],
        tracks : []
    },
    hotNewReleases : {
        data : []
    }
  };
  
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case INIT_MUSIC_CONTENT:
        return action.payload;
      default:
        return state;
    }
  };
  
  export default reducer;
  