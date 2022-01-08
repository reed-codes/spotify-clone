import {useContext} from 'react'
import styled from "styled-components";
import { useMediaQuery } from "@material-ui/core";
import useImageColor from "use-image-color";
import BackgroundEffect from '../common/BackgroundEffect';
import WideScreenPlayer from './components/players/WideScreenPlayer'
import SmallScreenPlayer from './components/players/SmallScreenDefaultPlayer'
import PipPlayer from './components/players/PipPlayer'
import { AudioPlayerContext } from '../../state/context/AudioPlayerContext';

export const PlayerWrapper = styled.div`
  width: ${({smallScreen})=> smallScreen ? "95%" : "100%" };
  height: ${({smallScreen})=> smallScreen ? "unset" : "100px" };
  bottom: ${({smallScreen})=> smallScreen ? "5px" : "-1px" } ;
  border-radius: ${({smallScreen})=> smallScreen ? "10px" : "0px" };
  position: fixed;
  left: 0;
  right:0;
  margin:auto;
  display: flex;
  cursor: default; 
  user-select: none;
  z-index:100;
`;


export default function Player(props){
        const {currentTrack, isPipOn} = useContext(AudioPlayerContext);
        const cover = currentTrack ? currentTrack.album.cover_xl : './cover-2.jpg';
        const { colors } = useImageColor(cover, { cors: true, colors: 5 });
        const max_width_950px = useMediaQuery("(max-width:950px)");

        return (
            <PlayerWrapper 
                          smallScreen = {max_width_950px}
                          className = "shadow-2xl"
                          >

                  { (isPipOn && !max_width_950px) &&  <PipPlayer constraintsRef = {props.config.constraintsRef}/> }

                  <BackgroundEffect accentColor = { colors ? colors[0] : ''}
                                    smallScreen = {max_width_950px}
                                    />

                  {max_width_950px ? <SmallScreenPlayer smallScreen = {max_width_950px}/> : <WideScreenPlayer cover = {cover}/>}
            </PlayerWrapper>
        )
} 
