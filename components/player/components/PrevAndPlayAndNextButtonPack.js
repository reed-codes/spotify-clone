import { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import {PlayerContext} from '../Player'

export default function PrevAndPlayAndNextButtonPack(){
    const {
      isPlaying,
      isLoading,
      handlePlay,
      handlePause,
      handlePlayNext,
      handlePlayPrev,
    } = useContext(PlayerContext)

     return (
 
           <>
                   <IconButton className = "player-controls-icon-btn"
                               aria-label="delete"
                               onClick = {handlePlayPrev}
                               >
                     <SkipPreviousIcon />
                   </IconButton>



 
                   <IconButton
                     style={{
                       height: 55,
                       width: 55,
                       margin: "0 8px",
                       color: "#fff",
                       opacity : isLoading ? .3 : 1,
                       pointerEvents : isLoading ? 'none' : 'all',
                     }}
                     aria-label="play / pause"
                     onClick = {()=> {
                          isPlaying && handlePause()
                          !isPlaying && handlePlay()
                     }}
                     >
 
                     {
                         isPlaying ? <PauseIcon style = {{fontSize:40}}/> : <PlayArrowIcon style={{ fontSize: 40 }} />
                     }
                     
                   </IconButton>



 
                   <IconButton className = "player-controls-icon-btn" 
                               aria-label="skip"
                               onClick = {handlePlayNext}
                               >
                     <SkipNextIcon />
                   </IconButton>
           
           </>
 
     )
 


}
