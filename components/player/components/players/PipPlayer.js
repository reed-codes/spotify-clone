import {useContext} from 'react'
import {motion} from 'framer-motion'  
import PrevAndPlayAndNextButtonPack from '../PrevAndPlayAndNextButtonPack'
import IconButton from "@material-ui/core/IconButton";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import {PlayerContext} from '../../Player'

const PIP_PLAYER_STYLE = {
    height:250,
    width: 250,
    bottom:0,
    right:30,
    padding:20,
    background: '#111',
    position: 'fixed',
    color:'#fff',
    boxShadow: '5px 5px 30px rgba(10,10,10,.9)',
    border:'1px rgba(10,10,10,.5) solid',
    display:'flex',
    justifyContent:'center',
    alignItems :'flex-end'
}

const CLOSE_PIP_BTN = {
    position : 'absolute',
    top: 0,
    right: 0,
    color:'#fff'
}

const PipPlayer = ({constraintsRef}) => {
    const {handlePipToggle} =  useContext(PlayerContext);

    return (
        <motion.div
            style = {{
                ...PIP_PLAYER_STYLE,
                zIndex: 100,
            }}
            drag
            dragConstraints={constraintsRef}
            dragElastic={30}
            animate={{ y: -110 }}
            initial={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            id="pip-player"
           >
          
            <IconButton className = "exit-pip-btn" 
                               aria-label="close pip"
                               title = "close pip"
                               style = {CLOSE_PIP_BTN}
                               onClick = {handlePipToggle}
                               >
                     <CloseTwoToneIcon />
            </IconButton>

           <div> <PrevAndPlayAndNextButtonPack/> </div>
        </motion.div>
    )
}

export default PipPlayer
