import React, { useState, useContext } from 'react'
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseIcon from "@mui/icons-material/Pause";
import { AudioPlayerContext } from '../../../state/context/AudioPlayerContext';

const PageMediaPlayerBtn = ({ tracklist, id }) => {
  const {
    handleTrackListInit,
    isPlaying,
    handlePlay,
    handlePause,
    currentCollection
  } = useContext(AudioPlayerContext);


  const handlePlayBtnClick = async () => {
    if ((String(currentCollection) === String(id))) {
      if (isPlaying) handlePause()
      else handlePlay()
    } else {
      const payload = {
        collection: id,
        list: tracklist
      }
      handleTrackListInit(payload)
    }

  }

  return (
    <span style={{ borderRadius: '50%' }}>
      {(isPlaying && String(currentCollection) === String(id)) ? (
        <IconButton onClick={handlePause} >
          <PauseIcon style={{ color: "#1db954", fontSize: 60, cursor: 'pointer' }} />
        </IconButton>
      ) : (
        <IconButton onClick={handlePlayBtnClick} >
          <PlayCircleIcon style={{ color: "#1db954", fontSize: 60, cursor: 'pointer' }} />
        </IconButton>
      )}
    </span>
  )
}

export default PageMediaPlayerBtn
