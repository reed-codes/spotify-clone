import React, { useContext } from 'react'
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Tooltip from "@mui/material/Tooltip";
import { motion } from 'framer-motion';
import { getTracklist } from '../../../utils'
import {AudioPlayerContext} from '../../../state/context/AudioPlayerContext'

const MediaPlayBtn = ({ item }) => {
   const {handleTrackListInit} = useContext(AudioPlayerContext);
   const state = useContext(AudioPlayerContext);

   const handlePlayBtnClick = async (e) => {
    e.stopPropagation()
    e.preventDefault()

    if (item.type === "track") {
      handleTrackListInit([item])
    }
    else {
      const tracklist = await getTracklist(item.tracklist)
      let new_list = null;

      if(item.type === "album"){
         new_list = tracklist.map(track => {
          return {
            ...track,
            album : item
          }
        })
      }

      handleTrackListInit(new_list ? new_list : tracklist)
    }

  }

  return (
    <motion.div
      animate={{ y: -10 }}
      initial={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Tooltip title="play" placement="bottom" arrow>
        <IconButton
          aria-label="play/pause"
          sx={{
            borderRadius: "50%",
            transform: "translate(-10px,0px)",
            bgColor: "#1db954",
            backgroundColor: "#1db954 !important",
            width: 40,
            height: 40,
            minWidth: 'unset',
            cursor: 'default',
            boxShadow: theme => theme.shadows[10]
          }}
          onClick={handlePlayBtnClick}
        >
          <PlayArrowIcon style={{ fontSize: 18, color: '#fff' }} />
        </IconButton>
      </Tooltip>
    </motion.div>
  )
}

export default MediaPlayBtn
