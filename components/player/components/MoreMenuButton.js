import { useState, useContext } from "react";
import {IconButton, Menu ,MenuItem} from "@material-ui/core";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import RepeatIcon from "@material-ui/icons/Repeat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import {PlayerContext} from '../Player'

const MENU_ITEM_STYLE = {
  background:'green',
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  color : "#fff",
  background:'#111',
  fontSize:14,
  borderBottom: '1px rgba(0,0,0, .3) solid'
}


export default function MoreMenuButton(){
    const {handleToggleRepeat, handleToggleShuffle, handleFullScreenClick, isShuffling , repeatFlag} =  useContext(PlayerContext);
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (e) => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);
  
    return (
  
          <>
  
  <IconButton className = "player-controls-icon-btn" 
             aria-label="more"
             onClick={handleClick}
             >
          <MoreVertIcon />
        </IconButton>
  
  
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
  
          <MenuItem onClick={()=>{
                         handleToggleShuffle()
                         handleClose()
                    }}
                    style = {MENU_ITEM_STYLE}
                    > 
                              Shuffle      
                              <IconButton className = "player-controls-icon-btn" 
                                         aria-label="more"
                                        >
                                        { isShuffling ? <ShuffleOnIcon/> : <ShuffleIcon /> }  
                            </IconButton>
  
  
          </MenuItem>
  
  
  
  
  
          <MenuItem onClick={()=>{
                          handleToggleRepeat()
                          handleClose()
                    }}
                    style = {MENU_ITEM_STYLE}
                    > 

                              Repeat       
                              <IconButton className = "player-controls-icon-btn" 
                                        aria-label="more"
                                        >
                                  { repeatFlag == 0  && <RepeatIcon /> }
                                  { repeatFlag == 1  && <RepeatOnIcon /> }
                                  { repeatFlag == 2  && <RepeatOneIcon /> }
                            </IconButton>
  
          </MenuItem>
  
  
  
  
          <MenuItem onClick={handleClose}
                    style = {MENU_ITEM_STYLE}
                    > 
                              Show now playing list 
                              <IconButton className = "player-controls-icon-btn" 
                                        aria-label="more"
                                        >
                              <PlaylistPlayIcon />
                            </IconButton>
  
          </MenuItem>
  
  
  
  
   
  
  
          <MenuItem onClick={()=>{
                           handleFullScreenClick()
                           handleClose()
                    }}
                    style = {MENU_ITEM_STYLE}
                     > 

                              Switch to fullscreen
                              <IconButton className = "player-controls-icon-btn" 
                                        aria-label="more"
                                        >
                              <OpenInFullIcon />
                            </IconButton>
  
  
                    </MenuItem>
          </Menu>
          
          </>
  
    )
  }