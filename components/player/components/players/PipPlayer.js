import { useContext } from 'react'
import { motion } from 'framer-motion'
import PrevAndPlayAndNextButtonPack from '../PrevAndPlayAndNextButtonPack'
import IconButton from "@material-ui/core/IconButton";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { AudioPlayerContext } from '../../../../state/context/AudioPlayerContext';

const OVERLAY_STYLE = {
    height: "100%",
    width: "100%",
    padding: 20,
    backgroundColor: 'rgba(0,0,0,.3)',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
}

const PIP_PLAYER_STYLE = {
    height: 250,
    width: 250,
    bottom: 0,
    right: 30,
    backgroundColor: '#111',
    position: 'fixed',
    boxShadow: '5px 5px 30px rgba(10,10,10,.9)',
    border: '1px rgba(10,10,10,.7) solid',
}

const CLOSE_PIP_BTN = {
    position: 'absolute',
    top: 0,
    right: 0,
    color: '#fff'
}

const PipPlayer = ({ constraintsRef }) => {
    const { handlePipToggle, currentTrack } = useContext(AudioPlayerContext);

    return (
        <motion.div
            style={{
                ...PIP_PLAYER_STYLE,
                backgroundImage: `url(${currentTrack.album.cover_medium})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 100,
            }}
            drag
            dragConstraints={constraintsRef}
            dragElastic={30}
            animate={{ y: -110 }}
            initial={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            id="pip-player"
            className="cursor-grab"
        >

            <div style={OVERLAY_STYLE}>
                <IconButton className="exit-pip-btn"
                    aria-label="close pip"
                    title="close pip"
                    style={CLOSE_PIP_BTN}
                    onClick={handlePipToggle}
                >
                    <CloseTwoToneIcon />
                </IconButton>

                <div> <PrevAndPlayAndNextButtonPack /> </div>
            </div>
        </motion.div>
    )
}

export default PipPlayer
