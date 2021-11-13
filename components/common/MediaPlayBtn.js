import React from 'react'
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Tooltip from "@mui/material/Tooltip";
import { motion } from 'framer-motion';

const MediaPlayBtn = () => {
  return (
    <motion.div
      animate={{ y: -10 }}
      initial={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Tooltip title="play" placement="bottom" arrow>
        <IconButton
          aria-label="play/pause"
          style={{
            borderRadius: "50%",
            transform: "translate(-10px,0px)",
            background: "#1db954",
            width: 40,
            height: 40,
            minWidth: 'unset',
            cursor: 'default'
          }}
        >
          <PlayArrowIcon style={{ fontSize: 18, color: '#fff' }} />
        </IconButton>
      </Tooltip>
    </motion.div>
  )
}

export default MediaPlayBtn
