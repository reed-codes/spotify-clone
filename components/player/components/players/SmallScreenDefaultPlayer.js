import { useContext } from 'react'
import styled from "styled-components";
import { useMediaQuery } from "@material-ui/core";
import TrackTitleAndArtist from '../TrackTitleAndArtist'
import BackgroundEffect from '../../../common/BackgroundEffect'
import PrevAndPlayAndNextButtonPack from '../PrevAndPlayAndNextButtonPack'
import MoreMenuButton from '../MoreMenuButton'
import PlayerProgressPack from '../PlayerProgressPack'
import { AudioPlayerContext } from '../../../../state/context/AudioPlayerContext';
import { Box } from '@mui/material';


const SmallScreenPlayerWrapper = styled.div`
height: 100% ;
width: 100% ;
position: relative ;
padding: ${({smallScreen})=> smallScreen ? "16px 0" : "0"}
`

const SmallScreenPlayerTopSection = styled.div`
height: 65% ;
width: 100% ;
display: flex ;
position: relative ;
`
const SmallScreenPlayerTrackTitleAndArtistWrapper = styled.div`
padding: 0 12px ;
height: 100%;
flex: 1;
display: flex ;
flex-direction: column ;
justify-content: center
`

const SmallScreenPlayerLeftControlsWrapper = styled.div`
padding:0 12px;
height: 100% ;
min-width:175px;
display :  flex ;
justify-content: space-between;
align-items: center;
position: absolute};
z-index: 3;
top:0;
right:0;
backdrop-filter:blur(100px) 
`


export default function SmallScreenDefaultPlayer({smallScreen}) {
  const { currentTrack } = useContext(AudioPlayerContext);

  return (

    <SmallScreenPlayerWrapper smallScreen = {smallScreen}>

      <Box sx={{
                width: '100%', 
                position: 'absolute',
                top: '-16px',
                padding:"0 10px"
                }}>
        <PlayerProgressPack smallScreen />
      </Box>


      <SmallScreenPlayerTopSection>
        <SmallScreenPlayerTrackTitleAndArtistWrapper>
          <TrackTitleAndArtist 
                  title={currentTrack.title}
                  artist={currentTrack.artist.name}
                  />
        </SmallScreenPlayerTrackTitleAndArtistWrapper>


        <SmallScreenPlayerLeftControlsWrapper>
          <PrevAndPlayAndNextButtonPack />
        </SmallScreenPlayerLeftControlsWrapper>
      </SmallScreenPlayerTopSection>



    </SmallScreenPlayerWrapper>
  )
}
