import { useContext } from 'react'
import styled from "styled-components";
import TrackTitleAndArtist from '../TrackTitleAndArtist'
import PrevAndPlayAndNextButtonPack from '../PrevAndPlayAndNextButtonPack'
import PlayerProgressPack from '../PlayerProgressPack'
import { AudioPlayerContext } from '../../../../state/context/AudioPlayerContext';
import { Box } from '@mui/material';


const SmallScreenPlayerWrapper = styled.div`
height: 100% ;
width: 100% ;
position: relative ;
padding: ${({ smallScreen }) => smallScreen ? "16px 0" : "0"};
`

const SmallScreenPlayerTopSection = styled.div`
height: 65% ;
width: 100% ;
display: flex ;
align-items: center;
position: relative ;
`
const SmallScreenPlayerTrackTitleAndArtistWrapper = styled.div`
padding: 0 12px ;
height: 100%;
flex: 1;
display: flex ;
flex-direction: column ;
justify-content: center;
overflow: hidden;
`

const SmallScreenPlayerLeftControlsWrapper = styled.div`
padding:0 12px;
height: 100% ;
border-radius:5px;
min-width:175px;
display :  flex ;
justify-content: space-between;
align-items: center;
// position: absolute};
z-index: 3;
top:0;
right:0;
// backdrop-filter:blur(100px) 
`


export default function SmallScreenDefaultPlayer({ smallScreen }) {
  const { currentTrack } = useContext(AudioPlayerContext);

  return (

    <SmallScreenPlayerWrapper smallScreen={smallScreen}>

      <Box sx={{
        width: '100%',
        position: 'absolute',
        top: '-16px',
        padding: "0 10px",
        pointerEvents: 'none'

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
