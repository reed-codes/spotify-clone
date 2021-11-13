import {
    INIT_MUSIC_CONTENT,
  } from "../action-types";

  const INIT_STATE = {
    tracks: [],
    playlists: [],
    artists: [],
    albums: [],
    podcasts: [],
    tracks_top_six : [],
    albums_top_six : [],
    playlists_top_six : [],
    artists_top_six: [],
    podcasts_top_six : [],
    err: ""
  };
  
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case INIT_MUSIC_CONTENT:
        return {
                  ...action.payload,
                  tracks_top_six: action.payload.tracks.slice(0, 6),
                  albums_top_six: action.payload.albums.slice(0, 6),
                  playlists_top_six: action.payload.playlists.slice(0, 6),
                  artists_top_six: action.payload.artists.slice(0, 6),
                  podcasts_top_six: action.payload.podcasts.slice(0, 6),
               };
      default:
        return state;
    }
  };
  
  export default reducer;
  