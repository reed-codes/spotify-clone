import React, {useContext} from 'react'
import { AudioPlayerContext } from '../../../../state/context/AudioPlayerContext'

const HTMLAudioPlayer = () => {
   const {handleTrackEnd, handleTrackBuffering, handleIsLoading, handleCanPlay, playerRef, tracklist, currentTrackIndex, handleTrackTimeUpdateFromAudioElement} = useContext(AudioPlayerContext)

  console.log(handleTrackEnd)
  console.log(handleTrackBuffering)
  console.log(handleIsLoading)
  console.log(handleCanPlay)
  console.log(playerRef)
  console.log(tracklist)
  console.log(currentTrackIndex)
  console.log(handleTrackTimeUpdateFromAudioElement)
  
    return (
        <audio
        autoPlay = {true}
        ref={playerRef}
        style={{ visibility: "hidden" }}
        onLoadStart={handleIsLoading}
        onCanPlay={handleCanPlay}
        onTimeUpdate={handleTrackTimeUpdateFromAudioElement}
        onWaiting={handleTrackBuffering}
        onEnded={handleTrackEnd}
    >
        <source src={tracklist.activeList[currentTrackIndex] ? tracklist.activeList[currentTrackIndex].preview : ""} type="audio/ogg" />
        <source src={tracklist.activeList[currentTrackIndex] ? tracklist.activeList[currentTrackIndex].preview : ""} type="audio/mpeg" />
        Your browser does not support the audio element.
    </audio>
    )
}

export default HTMLAudioPlayer
