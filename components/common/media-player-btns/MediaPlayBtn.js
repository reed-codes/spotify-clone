import React, { useContext } from 'react'
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Tooltip from "@mui/material/Tooltip";
import { motion } from 'framer-motion';
import { getTracklist } from '../../../utils'
import { AudioPlayerContext } from '../../../state/context/AudioPlayerContext'
import { useMediaQuery } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { alterRecentPlays } from '../../../state/actions/user-data-actions'

const MediaPlayBtn = ({ item, show }) => {
  const {
    handleTrackListInit,
    currentCollection,
    isPlaying,
    handlePause,
    handlePlay
  } = useContext(AudioPlayerContext);
  const maxWidth600px = useMediaQuery("(max-width:650px)");
  const dispatch = useDispatch()

  const handlePlayBtnClick = async (e) => {
    e.stopPropagation()
    e.preventDefault()

    if ((String(currentCollection) === String(item.id))) {

      if (isPlaying) handlePause()
      else handlePlay()

    } else {
      if (item.type === "track") {
        const payload = {
          collection: item.id,
          list: [item]
        }

        dispatch(alterRecentPlays({ ...item.album, artist: item.artist }))
        handleTrackListInit(payload);

      } else {
        const tracklist = await getTracklist(item.tracklist)
        let new_list = null;

        if (item.type === "album") {
          new_list = tracklist.map(track => {
            return {
              ...track,
              album: item
            }
          })
        }

        const payload = {
          collection: item.id,
          list: new_list ? new_list : tracklist
        }

        dispatch(alterRecentPlays(item))
        handleTrackListInit(payload)

      }
    }

  }

  return (
    <>
      {
        (isPlaying && (String(currentCollection) == String(item.id))) ? (

          <motion.div
            animate={{ y: -10 }}
            initial={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50% !important",
              display: maxWidth600px ? 'none' : 'block'
            }}
          >
            <Tooltip title="pause" placement="bottom" arrow>
              <IconButton
                aria-label="play/pause"
                sx={{
                  borderRadius: "50% !important",
                  transform: "translate(-10px,0px)",
                  bgColor: "#1db954",
                  backgroundColor: "#1db954 !important",
                  width: 40,
                  height: 40,
                  minWidth: 'unset',
                  cursor: 'default',
                }}
                className="shadow-2xl"
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  handlePause()
                }}
              >
                <PauseIcon style={{ fontSize: 18, color: '#fff' }} />
              </IconButton>
            </Tooltip>
          </motion.div>

        ) : (
          show ? (
            <motion.div
              animate={{ y: -10 }}
              initial={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}

              whileHover={{
                scale: 1.1,
                transition: { duration: .05 },
              }}
              whileTap={{ scale: 0.95 }}


              style={{
                width: 40,
                height: 40,
                borderRadius: "50% !important",
                display: maxWidth600px ? 'none' : 'block'
              }}
            >
              <Tooltip title="play" placement="bottom" arrow>
                <IconButton
                  aria-label="play/pause"
                  sx={{
                    borderRadius: "50% !important",
                    transform: "translate(-10px,0px)",
                    bgColor: "#1db954",
                    backgroundColor: "#1db954 !important",
                    width: 40,
                    height: 40,
                    minWidth: 'unset',
                    cursor: 'default',
                  }}
                  className="shadow-2xl"
                  onClick={handlePlayBtnClick}
                >
                  <PlayArrowIcon style={{ fontSize: 18, color: '#fff' }} />
                </IconButton>
              </Tooltip>
            </motion.div>
          ) : (
            <div></div>
          )


        )
      }
    </>

  )
}

export default MediaPlayBtn
