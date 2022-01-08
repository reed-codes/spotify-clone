import styled from "styled-components";
import { motion } from 'framer-motion'

const PlayerBackgroundEffectWrapper = styled.div`
width: 100%;
height: 100%;
position: absolute;
bottom:0;
left:0,
z-Index:4;
background: ${(props) => props.accentColor ? props.accentColor : '#000'};
filter: brightness(50%);
opacity:.95;
border-radius: ${({smallScreen})=> smallScreen ? "10px" : "0px" };
overflow:hidden;
`;


const PlayerBackdrobFilterWrapper = styled.div`
width: 100%;
height: 100%;
position: absolute ;
bottom:0;
left:0,
z-Index:5;
backdrop-filter:blur(10px);
background: ${(props) => props.accentColor ? 'rgba(0,0,0,.3)' : '#000'},
border-radius: ${({smallScreen})=> smallScreen ? "10px" : "0px" };
overflow:hidden;
`;


export default function BackgroundEffect(props) {


  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <PlayerBackdrobFilterWrapper accentColor={props.accentColor} smallScreen = {props.smallScreen}>
        <PlayerBackgroundEffectWrapper accentColor={props.accentColor} smallScreen = {props.smallScreen} />
      </PlayerBackdrobFilterWrapper>
    </motion.div>
  );
};
