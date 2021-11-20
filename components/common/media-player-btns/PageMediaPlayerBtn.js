import React, {useState} from 'react'
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseIcon from "@mui/icons-material/Pause";

const PageMediaPlayerBtn = ({tracklist}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlayRequest = () => {
                console.log("PLAY REQUEST FOR ", tracklist)
                  setIsPlaying(!isPlaying)
              };

    return (
        <span onClick={handlePlayRequest}>
               {isPlaying ? (
                <IconButton>
                  <PauseIcon style={{ color: "#1db954", fontSize: 60, cursor: 'pointer' }} />
                </IconButton>
              ) : (
                <IconButton>
                <PlayCircleIcon style={{ color: "#1db954", fontSize: 60, cursor: 'pointer' }} />
                </IconButton>
              )}
        </span>
    )
}

export default PageMediaPlayerBtn
