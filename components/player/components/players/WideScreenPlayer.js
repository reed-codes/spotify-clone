import { useContext } from "react";
import styled from "styled-components";
import {Slider, IconButton} from "@material-ui/core";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import RepeatIcon from "@material-ui/icons/Repeat";
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import PictureInPictureIcon from "@material-ui/icons/PictureInPicture";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import PlayerProgressPack from '../PlayerProgressPack'
import TrackTitleAndArtist from '../TrackTitleAndArtist'
import PrevAndPlayAndNextButtonPack from '../PrevAndPlayAndNextButtonPack'
import MoreMenuButton from '../MoreMenuButton'
import {PlayerContext} from '../../Player'

const PlayerGrid = styled.div`
  height: 100%;
  flex: 1;
  position: relative;
  z-index: 6;
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection == "column" ? flexDirection : "row"};
`;

export default function WideScreenPlayer(){
  const {currentTrack} =  useContext(PlayerContext);

  return (
    <>
      <PlayerGrid bgColor="green">
        <TrackInfoWrapper
          cover={"./demo-img-5.jpg"}
          title={currentTrack.title}
          artist={currentTrack.artist.name}
        />
      </PlayerGrid>

      <PlayerGrid flexDirection={"column"} bgColor="goldenrod">
        <PlayerCenterControls />
      </PlayerGrid>

      <PlayerGrid bgColor="green">
        <PlayerRightGridOptions />
      </PlayerGrid>
    </>
  );
};





const InfoWrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
transition: filter 0.05s;
cursor: pointer;
&:hover {
  filter: brightness(70%);
}
`;

const TrackCoverImage = styled.img`
height: 100%;
min-width: 100px;
background: #111;
object-fit: contain;
object-position: center;
pointer-events: none;
`;

const TrackDetailsContainer = styled.div`
padding-left:10px;
flex: 1;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`;


export const TrackInfoWrapper = (props) => {
return (
  <InfoWrapper>
    <TrackCoverImage src={props.cover} />

    <TrackDetailsContainer>
      <TrackTitleAndArtist title={props.title}
                           artist={props.artist}
                           />
    </TrackDetailsContainer>
  </InfoWrapper>
);
};











const PlayerProgressControlsWrapper = styled.div`
  height: 65%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const PlayerCenterControls = () => {

  const {handleToggleRepeat, handleToggleShuffle, isShuffling , repeatFlag} =  useContext(PlayerContext);
  
  return (
    <>
      <PlayerProgressControlsWrapper>
        <IconButton className = "player-controls-icon-btn"
                    aria-label="shuffle"
                    onClick = {handleToggleShuffle}
                    >
                    { isShuffling ? <ShuffleOnIcon/> : <ShuffleIcon /> }  
          
        </IconButton>

                 <PrevAndPlayAndNextButtonPack/>

        <IconButton className = "player-controls-icon-btn" 
                    aria-label="repeat"
                    onClick = {handleToggleRepeat}
                    >

              { repeatFlag == 0  && <RepeatIcon /> }
              { repeatFlag == 1  && <RepeatOnIcon /> }
              { repeatFlag == 2  && <RepeatOneIcon /> }

              
        </IconButton>
      </PlayerProgressControlsWrapper>

     
        <PlayerProgressPack/>

    </>
  );
};








const TrackVolumePack = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const PlayerRightGridOptions = () => {
  const {volume, handleVolumeChange} = useContext(PlayerContext)

  return (
    <div
      style={{
        width: "100%",
        height: "65%",
        padding: 5,
        display: "flex",
        alignItems: "center"
      }}
    >
      <TrackVolumePack>
        <IconButton>
          <VolumeDown style = {{color:"#fff"}}/>
        </IconButton>

        <Slider
          value={volume*100}
          onChange={handleVolumeChange}
          color = 'secondary'
          aria-labelledby="continuous-slider"
          style={{ flex: 1 }}
        />

        <IconButton>
          <VolumeUp style = {{color:"#fff"}}/>
        </IconButton>
      </TrackVolumePack>

      <IconButton
        className = "player-controls-icon-btn"
        aria-label="picture in picture"
      >
        <PictureInPictureIcon />
      </IconButton>


        <MoreMenuButton/>
   

    </div>
  );
};

