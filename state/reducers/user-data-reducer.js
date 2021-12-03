import {
ALTER_FAV_ARTISTS,
ALTER_FAV_SONGS,
ALTER_FAV_ALBUMS,
ALTER_FAV_PLAYLISTS,
ALTER_RECENT_PLAYS
} from "../action-types";

const INIT_STATE = {
  likedArtists: [],
  likedSongs: [],
  likedAlbums: [],
  likedPlaylists: [],
  recentPlays: []
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {

    case ALTER_FAV_ARTISTS:
      if (state.likedArtists.some(artist => artist.id === action.payload.id)) {
        return {
          ...state,
          likedArtists: state.likedArtists.filter(artist => artist.id !== action.payload.id)
        }
      } else {
        return {
          ...state,
          likedArtists: [...state.likedArtists, action.payload]
        }
      }

    case ALTER_FAV_SONGS:
      if (state.likedSongs.some(track => track.id === action.payload.id)) {
        return {
          ...state,
          likedSongs: state.likedSongs.filter(track => track.id !== action.payload.id)
        }
      } else {
        return {
          ...state,
          likedSongs: [...state.likedSongs, action.payload]
        }
      }

    case ALTER_FAV_ALBUMS:
      if (state.likedAlbums.some(album => album.id === action.payload.id)) {
        return {
          ...state,
          likedAlbums: state.likedAlbums.filter(album => album.id !== action.payload.id)
        }
      } else {
        return {
          ...state,
          likedAlbums: [...state.likedAlbums, action.payload]
        }
      }

    case ALTER_FAV_PLAYLISTS:
      if (state.likedPlaylists.some(playlist => playlist.id === action.payload.id)) {
        return {
          ...state,
          likedPlaylists: state.likedPlaylists.filter(playlist => playlist.id !== action.payload.id)
        }
      } else {
        return {
          ...state,
          likedPlaylists: [...state.likedPlaylists, action.payload]
        }
      }

    case ALTER_RECENT_PLAYS:
      let filteredOutArr = state.recentPlays.filter(media => media.id !== action.payload.id);
      let newRecentPlaysArr = [ 
                                  ...filteredOutArr, 
                                  {
                                    ...action.payload,
                                    timestamp: (new Date()).getTime()  
                                  }
                              ]

      console.log(newRecentPlaysArr)


        return {
          ...state,
          recentPlays: newRecentPlaysArr
        }

    default:
      return state;
  }
};

export default reducer;
