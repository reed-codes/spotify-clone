import {
  ALTER_FAV_ARTISTS,
  ALTER_FAV_SONGS,
  ALTER_FAV_ALBUMS,
  ALTER_FAV_PLAYLISTS,
  ALTER_RECENT_PLAYS
} from "../action-types";

export const alterFavArtists = (payload) => {
  return {
    type: ALTER_FAV_ARTISTS,
    payload
  };
};

export const alterFavSongs = (payload) => {
  return {
    type: ALTER_FAV_SONGS,
    payload
  };
};

export const alterFavAlbums = (payload) => {
  return {
    type: ALTER_FAV_ALBUMS,
    payload
  };
};

export const alterFavPlaylists = (payload) => {
  return {
    type: ALTER_FAV_PLAYLISTS,
    payload
  };
};

export const alterRecentPlays = (payload) => {
  return {
    type: ALTER_RECENT_PLAYS,
    payload
  };
};

