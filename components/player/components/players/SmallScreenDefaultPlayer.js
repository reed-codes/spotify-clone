import styled from "styled-components";
import { useMediaQuery } from "@material-ui/core";
import TrackTitleAndArtist from '../TrackTitleAndArtist'
import PlayerBackgroundEffect from '../PlayerBackgroundEffect'
import PrevAndPlayAndNextButtonPack  from '../PrevAndPlayAndNextButtonPack'
import MoreMenuButton  from '../MoreMenuButton'
import PlayerProgressPack from '../PlayerProgressPack'


const SmallScreenPlayerWrapper = styled.div`
height: 100% ;
width: 100% ;
position: relative ;
`

const SmallScreenPlayerTopSection = styled.div`
height: 65% ;
width: 100% ;
display: flex ;
position: relative ;
border-bottom:1px rgba(50,50,50, .5) solid;
`
const SmallScreenPlayerTrackTitleAndArtistWrapper =  styled.div`
padding: 0 12px ;
height: 100%;
flex: 1;
display: flex ;
flex-direction: column ;
justify-content: flex-end 
`

const SmallScreenPlayerLeftControlsWrapper = styled.div`
padding:0 12px;
height: 100% ;
display :  flex ;
justify-content: ${({max_width_560px}) => max_width_560px ? 'space-between' : 'flex-end'};
align-items: center;
position: ${({max_width_560px}) => max_width_560px ? 'absolute' : 'relative'};
z-index: 3;
top:0;
right:0
`


export default function SmallScreenDefaultPlayer(){
    const max_width_560px = useMediaQuery("(max-width:560px)")
  
  
      return (
  
                  <SmallScreenPlayerWrapper>
                 
                   <SmallScreenPlayerTopSection>
                              <SmallScreenPlayerTrackTitleAndArtistWrapper>
                                    <TrackTitleAndArtist  title={"React Marquee Libraries · react"}
                                                          artist={"The Cranberries"}
                                                          />
                              </SmallScreenPlayerTrackTitleAndArtistWrapper>
  
  
                              <SmallScreenPlayerLeftControlsWrapper max_width_560px = {max_width_560px}>

                                              <PlayerBackgroundEffect cover={"./demo-img-5.jpg"} />
  
                                              <PrevAndPlayAndNextButtonPack/>
  
                                              <MoreMenuButton/>
  
  
                              </SmallScreenPlayerLeftControlsWrapper>
                   </SmallScreenPlayerTopSection>
  
  
                   <PlayerProgressPack/>
  
  
                  </SmallScreenPlayerWrapper>
      )
  }
