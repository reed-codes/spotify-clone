import styled from "styled-components";
import { motion } from 'framer-motion'

const PlayerBackgroundEffectWrapper = styled.div`
width: 100%;
height: 100%;
position: absolute;
bottom:0;
left:0,
z-Index:4;
background: #000;
background: ${(props) => props.accentColor ? props.accentColor : '#000'};
filter: brightness(50%);
opacity:.95;
// transition : all .3s ease-in;
`;


const PlayerBackdrobFilterWrapper = styled.div`
width: 100%;
height: 100%;
position: absolute ;
bottom:0;
left:0,
z-Index:5;
overflow:hidden;
backdrop-filter:blur(10px);
background: ${(props) => props.accentColor ? 'rgba(0,0,0,.3)' : '#000'}
`;


export default function BackgroundEffect(props) {


  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <PlayerBackdrobFilterWrapper accentColor={props.accentColor}>
        <PlayerBackgroundEffectWrapper accentColor={props.accentColor} />
      </PlayerBackdrobFilterWrapper>
    </motion.div>
  );
};
