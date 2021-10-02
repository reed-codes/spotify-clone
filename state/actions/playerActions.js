export const setTrackLoading = (payload) => {
  return {
    type: "SET_TRACK_LOADING",
    payload,
  };
};

export const setIsPlaying = (payload) => {
  return {
    type: "SET_IS_PLAYING",
    payload,
  };
};

export const setTrackTime = (payload) => {
  return {
    type: "SET_TRACK_TIME",
    payload,
  };
};

export const setTrackDuration = (payload) => {
  console.log("updating  from action ", payload)
  return {
    type: "SET_TRACK_DURATION",
    payload,
  };
};

export const setTrackVolume = (payload) => {
  return {
    type: "SET_TRACK_VOLUME",
    payload,
  };
};

export const initializeAudioRef = (payload) => {
  return {
    type: "INITIALIZE_AUDIO_REF",
    payload,
  };
};

export const changeSongInCurrentList = (payload) => {
  return {
    type: "CHANGE_SONG_IN_CURRENT_LIST",
    payload, // CAN BE 'PREV' OR 'NEXT'
  };
};
