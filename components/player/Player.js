import {useState, useEffect, useContext} from 'react'
import styled from "styled-components";
import { useMediaQuery } from "@material-ui/core";
import useImageColor from "use-image-color";
import BackgroundEffect from '../common/BackgroundEffect';
import WideScreenPlayer from './components/players/WideScreenPlayer'
import SmallScreenPlayer from './components/players/SmallScreenDefaultPlayer'
import PipPlayer from './components/players/PipPlayer'
import { AudioPlayerContext } from '../../state/context/AudioPlayerContext';
import HTMLAudioPlayer from './components/players/HTMLAudioPlayer';

export const PlayerWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: -1px;
  left: 0;
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
            <PlayerWrapper accentColor = { colors ? colors[0] : ''} >

                  { isPipOn &&  <PipPlayer constraintsRef = {props.config.constraintsRef}/> }

                  <BackgroundEffect accentColor = { colors ? colors[0] : ''} />

                  {max_width_950px ? <SmallScreenPlayer/> : <WideScreenPlayer cover = {cover}/>}
                  <HTMLAudioPlayer/>
            </PlayerWrapper>
        )
} 
